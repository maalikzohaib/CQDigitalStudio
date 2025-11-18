"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    camera: THREE.Camera
    scene: THREE.Scene
    renderer: THREE.WebGLRenderer
    uniforms: any
    animationId: number
  } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Vertex shader
    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

    // Fragment shader
    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      vec3 palette(float t) {
        vec3 deep = vec3(0.58, 0.40, 0.08);
        vec3 mid = vec3(0.98, 0.82, 0.36);
        vec3 highlight = vec3(1.0, 0.95, 0.78);
        float curve = smoothstep(0.3, 1.0, t);
        return mix(mix(deep, mid, t), highlight, curve);
      }

      void main(void) {
        vec2 uv = (gl_FragCoord.xy / resolution.xy) * 2.0 - 1.0;
        uv.x *= resolution.x / resolution.y;

        float radial = length(uv);
        float angle = atan(uv.y, uv.x);
        float timeFactor = time * 0.4;

        float wave = sin(radial * 10.0 - timeFactor * 6.5) * 0.5 + 0.5;
        float sweep = cos(angle * 5.5 + timeFactor * 4.0) * 0.5 + 0.5;
        float ripple = sin((uv.x + uv.y) * 18.0 + timeFactor * 9.0) * 0.5 + 0.5;

        float gradient = clamp(1.0 - radial, 0.0, 1.0);
        float mixFactor = clamp(gradient * 0.65 + wave * 0.25 + sweep * 0.1, 0.0, 1.0);
        vec3 color = palette(mixFactor);

        float sparkle = pow(ripple, 3.0) * (0.6 + 0.4 * gradient);
        color += sparkle * vec3(1.0, 0.94, 0.7);
        color = clamp(color, 0.0, 1.0);

        gl_FragColor = vec4(color, 1.0);
      }
    `

    // Initialize Three.js scene
    const camera = new THREE.Camera()
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
    }

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)

    container.appendChild(renderer.domElement)

    // Handle window resize
    const onWindowResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      renderer.setSize(width, height)
      uniforms.resolution.value.x = renderer.domElement.width
      uniforms.resolution.value.y = renderer.domElement.height
    }

    // Initial resize
    onWindowResize()
    window.addEventListener("resize", onWindowResize, false)

    // Animation loop
    const animate = () => {
      const animationId = requestAnimationFrame(animate)
      uniforms.time.value += 0.05
      renderer.render(scene, camera)

      if (sceneRef.current) {
        sceneRef.current.animationId = animationId
      }
    }

    // Store scene references for cleanup
    sceneRef.current = {
      camera,
      scene,
      renderer,
      uniforms,
      animationId: 0,
    }

    // Start animation
    animate()

    // Cleanup function
    return () => {
      window.removeEventListener("resize", onWindowResize)

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId)

        if (container && sceneRef.current.renderer.domElement) {
          container.removeChild(sceneRef.current.renderer.domElement)
        }

        sceneRef.current.renderer.dispose()
        geometry.dispose()
        material.dispose()
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-screen"
      style={{
        background: "linear-gradient(135deg, #fefae5 0%, #f3ca6b 45%, #ba7f1d 100%)",
        overflow: "hidden",
      }}
    />
  )
}
