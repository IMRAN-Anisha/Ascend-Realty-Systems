import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, TrendingDown } from "lucide-react";

export default function Booking() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="booking"
      className="py-20 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
            Ready to Stop Losing Deals?
          </h2>

          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Book a free 20-minute audit call. We'll analyze your lead flow and show you exactly where deals are slipping away.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8 md:p-12 bg-white/95 backdrop-blur">
            <div className="text-center">

              <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-6" />

              <h3 className="text-3xl mb-4 text-gray-900">
                Book Your Free Audit Call
              </h3>

              <p className="text-gray-600 mb-8 text-lg">
                We'll walk through your current process and identify quick wins
              </p>

              {/* Calendly Embed */}
              <div
                className="calendly-inline-widget rounded-xl overflow-hidden"
                data-url="https://calendly.com/ascendrealtysystems/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                style={{ minWidth: "320px", height: "700px" }}
              />

              {/* Info */}
              <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Duration</div>
                    <div className="text-sm text-gray-600">20 minutes</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Calendar className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">No Obligation</div>
                    <div className="text-sm text-gray-600">Free call</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <TrendingDown className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Outcome</div>
                    <div className="text-sm text-gray-600">Actionable insights</div>
                  </div>
                </div>

              </div>

            </div>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}