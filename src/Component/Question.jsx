import React from "react";

const Question = () => {
  return (
    <div className="my-12 text-center max-w-3xl mx-auto px-4">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        Zap Shift – Frequently Asked Questions
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 mb-8 text-sm md:text-base">
        Here are common questions customers ask about our delivery and services.
        If you need more answers, we're always here for you!
      </p>

      {/* FAQ Items */}
      <div className="space-y-4">
        {/* 1 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq" defaultChecked />
          <div className="collapse-title font-semibold text-left">
            How does Zap Shift parcel delivery work?
          </div>
          <div className="collapse-content text-sm text-left">
            We pick up parcels from your location and deliver within 24–72 hours
            depending on the city. Express delivery available inside Dhaka.
          </div>
        </div>

        {/* 2 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq" />
          <div className="collapse-title font-semibold text-left">
            How can I track my parcel in real-time?
          </div>
          <div className="collapse-content text-sm text-left">
            Use our Live Tracking system — enter your parcel ID to monitor your
            delivery from pick-up to drop-off.
          </div>
        </div>

        {/* 3 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq" />
          <div className="collapse-title font-semibold text-left">
            Does Zap Shift offer Cash on Delivery (COD)?
          </div>
          <div className="collapse-content text-sm text-left">
            Yes! We provide secure COD services for businesses and online
            sellers.
          </div>
        </div>

        {/* 4 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq" />
          <div className="collapse-title font-semibold text-left">
            What should I do if my parcel gets delayed?
          </div>
          <div className="collapse-content text-sm text-left">
            You can contact our 24/7 support team anytime. We will check your
            delivery status and give instant updates.
          </div>
        </div>

        {/* 5 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq" />
          <div className="collapse-title font-semibold text-left">
            Is my parcel safe with Zap Shift?
          </div>
          <div className="collapse-content text-sm text-left">
            Absolutely! We ensure secure handling, sealed packaging, and
            damage-free delivery every time.
          </div>
        </div>

        {/* 6 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq" />
          <div className="collapse-title font-semibold text-left">
            How can I contact customer support?
          </div>
          <div className="collapse-content text-sm text-left">
            Our call center is available 24/7. You can reach us by phone, email,
            or live chat.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
