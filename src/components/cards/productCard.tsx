import { storeContext } from "@/context/useStore";
import { currencyFormatter } from "@/helpers/currencyConverter";
import { IProductProps } from "@/interface/store";
import { CheckCircle, Heart, ShoppingCart } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function ProductCard({ product }: {product: IProductProps}) {
    const { cart, toggleCart, wishlist, toggleWishlist } = useContext(storeContext)

    return (
        <div className="flex flex-col gap-4 p-2 rounded-[8px] border border-gray/[0.5] dark:border-gray/[0.08]">

            <div className="w-full h-[230px] relative rounded bg-gray/[0.3] dark:bg-gray/[0.08]">
                <Link href={"/product?id=" + product.id}>
                    <Image src={"/" +product.img} sizes="100%" fill alt={product.title} className="rounded object-cover" />
                </Link>
                <button className="absolute top-2 right-2 p-1" onClick={() => toggleWishlist(product.id) }>
                    { wishlist.indexOf(product.id) !== -1 ? <Heart size={16} color="red" /> : <Heart size={16} className=" opacity-[0.3] hover:opacity-[1]"/> }
                </button>
                <span className="absolute bottom-2 left-2 opacity-[0.7] hover:opacity-[1] p-1 px-2 text-[8px] border border-gray /[0.8] rounded">{product?.condition}</span>
            </div>
            <div className="flex flex-col gap-2 px-1">
                <Link href={"/product?id=" + product.id}>
                    <h3 className="">{product.title}</h3>
                </Link>
                <div className="flex items-center justify-between">
                    <h4 className="text-lg font-black">{currencyFormatter(product.price)}</h4>
                    <button onClick={() => toggleCart(product.id)}> {cart.map((item: any) => item.id).indexOf(product.id) !== -1 ? <CheckCircle size={16} color="green"/> : <ShoppingCart size={16} color="gray" /> }</button>
                </div>
            </div>
        </div>
    )
}