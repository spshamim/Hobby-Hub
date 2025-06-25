import React, { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How do I create a new group?",
            answer: "To create a new group, click on the 'Create Group' button in the navigation bar. Fill in the required information such as group name, description, and settings. Once submitted, your group will be created and you'll be automatically added as the group administrator.",
        },
        {
            question: "Can I join multiple groups?",
            answer: "Yes, you can join multiple groups. There is no limit to the number of groups you can be a member of. Each group operates independently, and you can manage your participation in each group separately.",
        },
        {
            question: "How do I invite members to my group?",
            answer: "As a group administrator, you can invite members by clicking on the 'Invite Members' button in your group's dashboard. You can either send invitations via email or share a unique invitation link with potential members.",
        },
        {
            question: "What happens if I forget my password?",
            answer: "If you forget your password, click on the 'Forgot Password' link on the login page. You'll receive an email with instructions to reset your password. Follow the link in the email to create a new password.",
        },
        {
            question: "How can I update my profile information?",
            answer: "You can update your profile information by clicking on your profile picture in the top right corner and selecting 'Edit Profile'. Here you can modify your personal information, profile picture, and account settings.",
        },
        {
            question: "Is my personal information secure?",
            answer: "Yes, we take security seriously. All personal information is encrypted and stored securely. We never share your personal information with third parties without your consent. For more details, please refer to our Privacy Policy.",
        },
        {
            question: "How do I report inappropriate content?",
            answer: "If you encounter inappropriate content, click on the 'Report' button associated with the content. Our moderation team will review the report and take appropriate action. You can also contact our support team directly for urgent matters.",
        },
        {
            question: "Can I delete my account?",
            answer: "Yes, you can delete your account at any time. Go to your account settings and select 'Delete Account'. Please note that this action is permanent and cannot be undone. All your data will be permanently removed from our systems.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">
                Frequently Asked Questions
            </h1>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                        <button
                            className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-lg">
                                    {faq.question}
                                </span>
                                <span className="text-gray-500">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </div>
                        </button>

                        {openIndex === index && (
                            <div className="px-6 py-4 bg-gray-50">
                                <p className="text-gray-700">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <p className="text-gray-600">
                    Still have questions? Contact our support team at{" "}
                    <a
                        href="mailto:support@example.com"
                        className="text-blue-600 hover:underline"
                    >
                        support@hobbyhub.com
                    </a>
                </p>
            </div>
        </div>
    );
};

export default FAQ;
