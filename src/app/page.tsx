export default function Home() {
	return (
		<div className="flex justify-center min-h-screen px-4 py-6 md:items-center bg-background text-metal">
			<main className="grid md:grid-cols-2 max-w-[600px] bg-white rounded-[10px] h-fit">
				<section>
					<img
						src="/images/image-product-desktop.jpg"
						alt="Product"
						className="hidden w-full h-full md:block rounded-l-[10px]"
					/>
					<img
						src="/images/image-product-mobile.jpg"
						alt="Product"
						className="w-full h-full md:hidden rounded-t-[10px]"
					/>
				</section>
				<section className="flex flex-col gap-6 p-6 md:p-7">
					<p className="uppercase tracking-[5px] text-xs">Perfume</p>
					<h1 className="font-bold text-gunMetal text-[32px] leading-[32px] font-mono">
						Gabrielle Essence Eau De Parfum
					</h1>
					<p className="text-sm">
						A floral, solar and voluptuous interpretation composed by Olivier
						Polge, Perfumer-Creator for the House of CHANEL.
					</p>
					<div className="flex items-center gap-4">
						<p className="font-mono font-bold text-aquamarine text-[32px]">
							$149.99
						</p>
						<p className="text-[13px] leading-[23px] line-through">$169.99</p>
					</div>
					<button
						type="button"
						className="flex justify-center gap-4 p-4 text-sm font-bold text-white rounded-lg bg-aquamarine hover:bg-aquamarineHover"
					>
						<img src="/images/icon-cart.svg" alt="Cart" />
						Add to cart
					</button>
				</section>
			</main>
		</div>
	);
}
