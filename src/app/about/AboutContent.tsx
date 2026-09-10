"use client";

import { useLang } from "@/lib/lang";

export default function AboutContent() {
	const { t } = useLang();

	const timeline = [
		{
			year: "2022",
			text: t(
				"Хоёр найз Улаанбаатарын гаражид гурван оёдлын машинтай эхэлсэн. Анхны 12 hoodie найз нөхдөдөө зарагдав.",
				"Two friends started in an Ulaanbaatar garage with three sewing machines. The first 12 hoodies sold to friends.",
			),
		},
		{
			year: "2023",
			text: t(
				"DROP 001 цуврал 47 минутын дотор дуусав. Хүлээлгийн жагсаалтад 900 гаруй хүн бүртгүүлэв.",
				"The DROP 001 series sold out in 47 minutes. Over 900 people joined the waitlist.",
			),
		},
		{
			year: "2024",
			text: t(
				"Сүхбаатар дүүрэгт өөрийн цех нээж, 9 оёдолчинтой болов. Бүх материалыг Монгол, Японоос татдаг.",
				"Opened our own workshop in Sükhbaatar district with a team of 9 makers. Materials sourced from Mongolia and Japan.",
			),
		},
		{
			year: "2025",
			text: t(
				"Улирал бүр ганц л цуврал. Дууссан загвар дахин үйлдвэрлэгддэггүй зарчмаа хадгалсаар.",
				"One series per season. We still never restock a design once it is gone.",
			),
		},
	];

	const values = [
		{
			k: t("ЦӨӨН, ГЭХДЭЭ ЗӨВ", "FEWER, BUT RIGHT"),
			v: t(
				"Загвар бүрийг 60-120 ширхэгээр л оёно. Илүүдэл бараа, хямдрал, агуулах гэж байхгүй.",
				"Every design is cut in runs of just 60–120. No surplus, no sales, no warehouse.",
			),
		},
		{
			k: t("ХАТУУ НӨХЦӨЛД ТУРШСАН", "TESTED IN THE COLD"),
			v: t(
				"−30°C-т, салхи шуурганд өмсөж туршсаны дараа л зарна. Тэсэхгүй бол буцаж ширээн дээр очно.",
				"Nothing ships until it has been worn at −30°C in wind. If it fails, it goes back to the table.",
			),
		},
		{
			k: t("НЭЭЛТТЭЙ ҮНЭ", "HONEST PRICE"),
			v: t(
				"Материал, оёдол, хүргэлтийн зардлыг ил тод бичдэг. Брэндийн нэрэнд төлбөр нэмдэггүй.",
				"We break down material, labour and delivery cost openly. You do not pay extra for the logo.",
			),
		},
	];

	return (
		<div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
			<div className="font-mono text-[11px] uppercase tracking-[0.2em] text-hud">// {t("Бидний тухай", "About")}</div>
			<h1 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
				{t("ГАРАЖААС ЭХЭЛСЭН", "STARTED IN A GARAGE")}
			</h1>
			<p className="mt-6 text-muted">
				{t(
					"Bortsog бол Монголд оёж үйлдвэрлэдэг стритвэр брэнд. Бид hoodie, гадуур хувцсыг бага багаар, чанартай материалаар бэлддэг. Загвар бүр хязгаарлагдмал тоогоор гарах бөгөөд дууссан загвар дахин үйлдвэрлэгддэггүй. Энэ нь брэндийг ховор байлгаж, хэт үйлдвэрлэлээс сэргийлдэг.",
					"Bortsog is a streetwear brand cut and sewn in Mongolia. We make hoodies and outerwear in small batches from quality materials. Every design is released in a limited run and never restocked once it sells out — this keeps the brand scarce and keeps us out of overproduction.",
				)}
			</p>

			<h2 className="mt-14 font-mono text-[11px] uppercase tracking-[0.2em] text-hud">// {t("Түүх", "Timeline")}</h2>
			<div className="mt-5 divide-y divide-border border-y border-border">
				{timeline.map((row) => (
					<div key={row.year} className="flex gap-6 py-5">
						<div className="font-display text-xl font-bold text-hud">{row.year}</div>
						<p className="text-sm text-muted">{row.text}</p>
					</div>
				))}
			</div>

			<h2 className="mt-14 font-mono text-[11px] uppercase tracking-[0.2em] text-hud">// {t("Философи", "Philosophy")}</h2>
			<div className="mt-5 grid gap-4 sm:grid-cols-3">
				{values.map((val) => (
					<div key={val.k} className="hud-box p-4">
						<div className="font-mono-hud text-[10px] text-foreground">{val.k}</div>
						<p className="mt-2 text-[13px] text-muted">{val.v}</p>
					</div>
				))}
			</div>

			<h2 className="mt-14 font-mono text-[11px] uppercase tracking-[0.2em] text-hud">// {t("Үйлдвэрлэл", "How it is made")}</h2>
			<p className="mt-5 text-sm text-muted">
				{t(
					"Даавуу нь 380–450 г/м² жинтэй, сунахгүй loop-back cotton. Малгай, ханцуй, ташааны хэсгийг гурав давхар оёж бэхжүүлдэг. Нэг hoodie дунджаар 2 цаг 40 минутын гар ажиллагаа шаарддаг. Оёдолчин бүр өөрийн оёсон бүтээгдэхүүнд гарын үсгээ үлдээдэг.",
					"The fabric is a non-stretch loop-back cotton at 380–450 gsm. The hood, cuffs and hip seams are triple-stitched for strength. One hoodie takes about 2 hours 40 minutes of hand work on average, and every maker signs the piece they sewed.",
				)}
			</p>

			<div className="mt-14 grid gap-8 sm:grid-cols-2">
				<div>
					<h3 className="font-display text-lg font-bold">{t("Дэлгүүрийн байршил", "Store location")}</h3>
					<p className="mt-2 text-sm text-muted">
						{t(
							"Сүхбаатар дүүрэг, 3-р хороо, 45-р байрны зүүн тал, Улаанбаатар, Монгол Улс",
							"Sükhbaatar district, khoroo 3, east side of building 45, Ulaanbaatar, Mongolia",
						)}
					</p>
					<a
						href="https://www.google.com/maps/place/SADCREAM/"
						target="_blank"
						rel="noreferrer"
						className="mt-2 inline-block text-sm underline hover:text-foreground"
					>
						{t("Google Maps дээр нээх", "Open in Google Maps")}
					</a>
				</div>

				<div>
					<h3 className="font-display text-lg font-bold">{t("Хүргэлт", "Delivery")}</h3>
					<ul className="mt-2 space-y-1 text-sm text-muted">
						<li>{t("A бүс дотор: хүргэлтийн төлбөр 10,000₮", "Zone A: delivery fee ₮10,000")}</li>
						<li>{t("A бүсээс гадна: хүргэлтийн төлбөр 15,000₮", "Outside zone A: delivery fee ₮15,000")}</li>
						<li>{t("Захиалгыг 24 цагийн дотор хүргэнэ.", "Orders delivered within 24 hours.")}</li>
						<li>{t("Төлбөрийг QPay-ээр төлнө.", "Payment via QPay.")}</li>
					</ul>
				</div>

				<div>
					<h3 className="font-display text-lg font-bold">{t("Хэмжээ", "Sizing")}</h3>
					<ul className="mt-2 space-y-1 text-sm text-muted">
						<li>{t("L — (160–175 см)", "L — (160–175 cm)")}</li>
						<li>{t("XL — (175–190 см)", "XL — (175–190 cm)")}</li>
						<li>{t("Эрэгтэй, эмэгтэй өмсөж болно.", "Unisex fit.")}</li>
					</ul>
				</div>

				<div>
					<h3 className="font-display text-lg font-bold">{t("Сошиал", "Social")}</h3>
					<ul className="mt-2 space-y-1 text-sm text-muted">
						<li>
							<a
								href="https://www.instagram.com/bortsog_mongolia/"
								target="_blank"
								rel="noreferrer"
								className="underline hover:text-foreground"
							>
								Instagram — @bortsog_mongolia
							</a>
						</li>
						<li>
							<a
								href="https://www.facebook.com/profile.php"
								target="_blank"
								rel="noreferrer"
								className="underline hover:text-foreground"
							>
								Facebook — Bortsog
							</a>
						</li>
					</ul>
				</div>
			</div>

			<p className="mt-16 border-t border-border pt-6 text-xs text-muted">
				{t(
					"Энэ вэб хуудас нь sadcream.com-ын дизайн, бүтцийг судлан хийсэн жишээ бөгөөд албан ёсны сайт биш. Bortsog болон дээрх түүх бүхэлдээ зохиомол.",
					"This page is a study of the design and structure of sadcream.com and is not an official site. Bortsog and the story above are entirely fictional.",
				)}
			</p>
		</div>
	);
}
