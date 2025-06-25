import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">
                Privacy Policy
            </h1>

            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        1. Information We Collect
                    </h2>
                    <p className="text-gray-700 mb-4">
                        We collect information that you provide directly to us,
                        including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Name and contact information</li>
                        <li>Account credentials</li>
                        <li>Profile information</li>
                        <li>Group participation data</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        2. How We Use Your Information
                    </h2>
                    <p className="text-gray-700 mb-4">
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Provide and maintain our services</li>
                        <li>Process your transactions</li>
                        <li>Send you technical notices and support messages</li>
                        <li>
                            Communicate with you about products, services, and
                            events
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        3. Information Sharing
                    </h2>
                    <p className="text-gray-700">
                        We do not sell or rent your personal information to
                        third parties. We may share your information with:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                        <li>Service providers who assist in our operations</li>
                        <li>Legal authorities when required by law</li>
                        <li>
                            Other users as part of group activities (with your
                            consent)
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        4. Data Security
                    </h2>
                    <p className="text-gray-700">
                        We implement appropriate technical and organizational
                        measures to protect your personal information against
                        unauthorized access, alteration, disclosure, or
                        destruction.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        5. Your Rights
                    </h2>
                    <p className="text-gray-700 mb-4">You have the right to:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Access your personal information</li>
                        <li>Correct inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Object to processing of your data</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        6. Contact Us
                    </h2>
                    <p className="text-gray-700">
                        If you have any questions about this Privacy Policy,
                        please contact us at:
                        <br />
                        <a
                            href="mailto:privacy@example.com"
                            className="text-blue-600 hover:underline"
                        >
                            privacy@example.com
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
