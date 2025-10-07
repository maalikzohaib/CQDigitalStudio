import PackageCard from '../PackageCard'

export default function PackageCardExample() {
  return (
    <div className="p-8">
      <PackageCard
        name="Silver"
        price="$1,499"
        popular={true}
        features={[
          '6 hours of coverage',
          '300+ edited photos',
          'Online gallery',
          'Print rights included',
          '2 photographers'
        ]}
      />
    </div>
  )
}
