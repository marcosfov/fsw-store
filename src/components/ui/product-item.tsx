import Image from "next/image";
import { ArrowDownIcon } from "lucide-react";

import { ProductWithTotalPrice } from "@/helpers/product";
import { Badge } from "./badge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col gap-4 max-w-[156px]">
      <div className=" relative flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-auto max-w-[80%] max-h-[70%]"
          alt={`Imagem do produto ${product.slug}`}
          style={{ objectFit: "contain" }}
        />

        {product.discountPercentage > 0 && (
          <Badge className="absolute left-2 top-2 px-2 py-[2px]">
            <ArrowDownIcon size={12} /> {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 && (
            <>
              <p className="font-semibold">
                R$ {product.totalPrice.toFixed(2)}
              </p>
              <p className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          )}

          {product.discountPercentage <= 0 && (
            <p className="text-sm font-semibold">
              R$ {Number(product.basePrice).toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
