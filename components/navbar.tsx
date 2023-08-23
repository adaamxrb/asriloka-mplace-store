import Link from 'next/link';
import Container from './ui/container';

const Navbar = () => {
	return (
		<div className="border-b">
			<Container>
				<div className="relative px-4 sm:px-6 lg:px-8">
					<Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
						<p className="font-bold text-xl">
							ASRILOKA MARKETPLACE
						</p>
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
