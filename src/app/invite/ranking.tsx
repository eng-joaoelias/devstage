import Image from "next/image";
import cooper from "../../../assets/medal-cooper.svg";
import silver from "../../../assets/medal-silver.svg";
import gold from "../../../assets/medal-gold.svg";

export function Ranking() {
	return (
		<div className="w-full max-w-[440px] space-y-5">
			<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none ">
				Ranking de Indicações
			</h2>

			<div className="space-y-4 ">
				<div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 ">
					<span className="text-sm text-gray-300 leading-none ">
						<span className="font-semibold ">1º</span> | Diego Souza
					</span>

					<span className="font-heading text-2xl font-semibold text-gray-200 leading-none ">
						1030
					</span>

					<Image
						src={gold}
						alt={"Medalha de ouro"}
						className="absolute top-0 right-8  "
					/>
				</div>

				<div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 ">
					<span className="text-sm text-gray-300 leading-none ">
						<span className="font-semibold ">2º</span> | Maicon Douglas
					</span>

					<span className="font-heading text-2xl font-semibold text-gray-200 leading-none ">
						760
					</span>

					<Image
						src={silver}
						alt={"Medalha de prata"}
						className="absolute top-0 right-8  "
					/>
				</div>

				<div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 ">
					<span className="text-sm text-gray-300 leading-none ">
						<span className="font-semibold ">3º</span> | Larissa Freitas
					</span>

					<span className="font-heading text-2xl font-semibold text-gray-200 leading-none ">
						375
					</span>

					<Image
						src={cooper}
						alt={"Medalha de bronze"}
						className="absolute top-0 right-8  "
					/>
				</div>
			</div>
		</div>
	);
}
