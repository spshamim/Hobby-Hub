import React from "react";

const TermsAndConditions = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">
                Terms and Conditions
            </h1>

            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        1. Acceptance of Terms
                    </h2>
                    <p className="text-gray-700">
                        By accessing and using this platform, you agree to be
                        bound by these Terms and Conditions. If you do not agree
                        to these terms, please do not use our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        2. User Accounts
                    </h2>
                    <p className="text-gray-700 mb-4">
                        To use certain features of our platform, you must:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Be at least 13 years old</li>
                        <li>Provide accurate and complete information</li>
                        <li>Maintain the security of your account</li>
                        <li>Notify us immediately of any unauthorized use</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        3. User Conduct
                    </h2>
                    <p className="text-gray-700 mb-4">You agree not to:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Violate any laws or regulations</li>
                        <li>Impersonate others or provide false information</li>
                        <li>
                            Interfere with the proper functioning of the
                            platform
                        </li>
                        <li>Harass, abuse, or harm others</li>
                        <li>Share inappropriate or offensive content</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        4. Intellectual Property
                    </h2>
                    <p className="text-gray-700">
                        All content on this platform, including but not limited
                        to text, graphics, logos, and software, is the property
                        of our company and is protected by intellectual property
                        laws.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        5. Limitation of Liability
                    </h2>
                    <p className="text-gray-700">
                        We are not liable for any indirect, incidental, special,
                        consequential, or punitive damages resulting from your
                        use of or inability to use the platform.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        6. Changes to Terms
                    </h2>
                    <p className="text-gray-700">
                        We reserve the right to modify these terms at any time.
                        We will notify users of any material changes via email
                        or through the platform.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        7. Contact Information
                    </h2>
                    <p className="text-gray-700">
                        For questions about these Terms and Conditions, please
                        contact us at:
                        <br />
                        <a
                            href="mailto:terms@example.com"
                            className="text-blue-600 hover:underline"
                        >
                            terms@example.com
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsAndConditions;
