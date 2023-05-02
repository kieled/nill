import ProductCard from "./_components/ProductCard"
import products from "mocks/products"

function Page() {
  return (
    <div>
      <div
        className='w-full min-h-[40vh] bg-primary-10 rounded-xl border-2 border-primary-30 flex items-center justify-center text-2xl font-medium mb-5'>
        AD BANNER
      </div>
      <h3 className={'text-center text-2xl font-medium mb-5'}>Products</h3>
      <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-4 mb-10'>
        {products.map(i => <ProductCard key={i.id} {...i} />)}
      </div>
    </div>
  )
}

export default Page
