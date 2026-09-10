export const metadata = { title: "Бидний тухай — Bortsog" };

export default function AboutPage() {
	return (
		<div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
			<h1 className="font-display text-4xl font-bold">Бидний тухай</h1>
			<p className="mt-6 text-muted">
				Bortsog бол Монголд оёж үйлдвэрлэдэг үндэсний стритвэр брэнд. Бид hoodie, гадуур хувцасыг
				бага багаар, чанартай материалаар бэлддэг. Загвар бүр хязгаарлагдмал тоогоор гарах бөгөөд
				дууссан загвар дахин үйлдвэрлэгддэггүй.
			</p>

			<div className="mt-12 grid gap-8 sm:grid-cols-2">
				<div>
					<h2 className="font-display text-lg font-bold">Дэлгүүрийн байршил</h2>
					<p className="mt-2 text-sm text-muted">
						Сүхбаатар дүүрэг, 3-р хороо, 45-р байрны зүүн тал, Улаанбаатар, Монгол Улс
					</p>
					<a
						href="https://www.google.com/maps/place/SADCREAM/"
						target="_blank"
						rel="noreferrer"
						className="mt-2 inline-block text-sm underline hover:text-foreground"
					>
						Google Maps дээр нээх
					</a>
				</div>

				<div>
					<h2 className="font-display text-lg font-bold">Хүргэлт</h2>
					<ul className="mt-2 space-y-1 text-sm text-muted">
						<li>A бүс дотор: хүргэлтийн төлбөр 10,000₮</li>
						<li>A бүсээс гадна: хүргэлтийн төлбөр 15,000₮</li>
						<li>Захиалгыг 24 цагийн дотор хүргэнэ.</li>
						<li>Төлбөрийг QPay-ээр төлнө.</li>
					</ul>
				</div>

				<div>
					<h2 className="font-display text-lg font-bold">Хэмжээ</h2>
					<ul className="mt-2 space-y-1 text-sm text-muted">
						<li>L — (160–175 см)</li>
						<li>XL — (175–190 см)</li>
						<li>Эрэгтэй, эмэгтэй өмсөж болно.</li>
					</ul>
				</div>

				<div>
					<h2 className="font-display text-lg font-bold">Сошиал</h2>
					<ul className="mt-2 space-y-1 text-sm text-muted">
						<li>
							<a href="https://www.instagram.com/sadcream_mongolia/" target="_blank" rel="noreferrer" className="underline hover:text-foreground">
								Instagram — @bortsog_mongolia
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/profile.php" target="_blank" rel="noreferrer" className="underline hover:text-foreground">
								Facebook — Bortsog
							</a>
						</li>
					</ul>
				</div>
			</div>

			<p className="mt-16 border-t border-border pt-6 text-xs text-muted">
				Энэ вэб хуудас нь sadcream.com-ын дизайн, бүтцийг судлан хийсэн жишээ бөгөөд албан ёсны сайт биш. Bortsog нь зөвхөн жишээ брэндийн нэр.
			</p>
		</div>
	);
}
