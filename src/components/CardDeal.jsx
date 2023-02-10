import React from "react";

import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
	<section className={layout.section}>
		<div className={layout.sectionInfo}>
			<h2 className={styles.heading2}>
				Find a better card deal <br className="sm:block hidden" /> in a few easy
				steps
			</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum cumque
				deserunt atque itaque pariatur deleniti possimus aut incidunt autem
				architecto, iusto optio aperiam, ipsam dolore quam numquam molestias
				reiciendis excepturi.
			</p>
			<Button styles="mt-10" />
		</div>

		<div className={layout.sectionImg}>
			<img src={card} alt="card" className="w-full h-full" />
		</div>
	</section>
);

export default CardDeal;
