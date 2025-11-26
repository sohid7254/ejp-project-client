import BackButton from "@/Components/BackButton";


const Page = async ({ params }) => {
    const { id } = await params;
    
    console.log("product id", id);

    const res = await fetch(`http://localhost:4000/product/${id}`);
    const product = await res.json();
    console.log("here is details", product);

    
      

    return (
        <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-8">
            {/* Left Side - Large Image */}
            <div className="flex-1">
                <div className="w-90 h-[500px] bg-gray-100 rounded-lg overflow-hidden">
                    <img src={product.image_url} alt={product.title} className="w-90 h-full object-cover" />
                </div>
            </div>

            {/* Right Side - Text + Button */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    {/* Product Title */}
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{product?.title}</h1>

                    {/* Full Description */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{product?.full_description}</p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-8">
                        <span className="font-semibold text-orange-600 text-lg">Price: ${product?.price}</span>
                        <span>Date: {product?.date || "N/A"}</span>
                        <span>Priority: {product?.priority || "Normal"}</span>
                    </div>
                </div>

                {/* Back Button */}
                <BackButton />
            </div>
        </div>
    );
};

export default Page;
