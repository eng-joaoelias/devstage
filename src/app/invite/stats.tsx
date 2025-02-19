import { MousePointerClick, BadgeCheck, Medal } from "lucide-react";

export default function Stats() {
	return (
		<div className="grid gap-3 md:grid-cols-3">
			<div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center rounded-xl">
				<MousePointerClick className="absolute size-5 text-purple top-3 left-3" />
				<span className="font-heading text-2xl font-semibold text-gray-200 leading-none =">
					1042
				</span>
				<span className="text-sm text-gray-300 leading-none text-center">
					Acessos ao link
				</span>
			</div>

			<div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center rounded-xl">
				<BadgeCheck className="absolute size-5 text-purple top-3 left-3" />
				<span className="font-heading text-2xl font-semibold text-gray-200 leading-none =">
					1042
				</span>
				<span className="text-sm text-gray-300 leading-none text-center">
					Inscrições feitas
				</span>
			</div>

			<div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center rounded-xl">
				<Medal className="absolute size-5 text-purple top-3 left-3" />
				<span className="font-heading text-2xl font-semibold text-gray-200 leading-none =">
					3º
				</span>
				<span className="text-sm text-gray-300 leading-none text-center">
					Posição no ranking
				</span>
			</div>
		</div>
	);
}
