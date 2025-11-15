"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full z-50 bg-white shadow-sm">
            <div className="max-w-[1500px] mx-auto px-6 py-3 flex justify-between items-center">
                {/* Left: Accurate + Accreditation Logos */}
                <div className="flex items-center gap-5 flex-wrap">
                    <Link href="/">
                        <Image
                            src="/image/accurate-logo.webp"
                            alt="Accurate Logo"
                            width={320}
                            height={60}
                            className="object-contain cursor-pointer"
                        />
                    </Link>

                    <div className="flex items-center gap-3">
                        <Image
                            src="/image/accreditations/aicte-logo.webp"
                            alt="AICTE Logo"
                            width={50}
                            height={50}
                            className="object-contain shadow-md rounded"
                        />
                        <Image
                            src="/image/accreditations/ccsu-logo.webp"
                            alt="CCSU Logo"
                            width={50}
                            height={50}
                            className="object-contain shadow-md rounded"
                        />
                        <Image
                            src="/image/accreditations/naac-logo.webp"
                            alt="NAAC Logo"
                            width={50}
                            height={50}
                            className="object-contain shadow-md rounded"
                        />
                    </div>
                </div>

                {/* Right: Contact Info */}
                <div className="flex text-right text-base leading-tight text-black gap-5">
                    <p>
                        <strong>Phone:</strong> +91-98995 69090
                    </p>
                    <p>
                        <strong>Email:</strong> admissions@accurate.in
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
