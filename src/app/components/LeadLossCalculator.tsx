import { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingDown, DollarSign } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';

export function LeadLossCalculator() {
  const [enquiriesPerWeek, setEnquiriesPerWeek] = useState(20);
  const [avgCommission, setAvgCommission] = useState(15000);
  const [missedPercentage, setMissedPercentage] = useState(30);

  const weeksPerMonth = 4.33;
  const monthlyEnquiries = enquiriesPerWeek * weeksPerMonth;
  const missedEnquiries = (monthlyEnquiries * missedPercentage) / 100;
  const conversionRate = 0.10; // 10% of missed enquiries would have converted
  const lostDeals = missedEnquiries * conversionRate;
  const monthlyLoss = lostDeals * avgCommission;
  const yearlyLoss = monthlyLoss * 12;

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-8 bg-white">
        <div className="space-y-8">
          {/* Calculator Inputs */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="enquiries">Enquiries per week</Label>
              <Input
                id="enquiries"
                type="number"
                value={enquiriesPerWeek}
                onChange={(e) => setEnquiriesPerWeek(Number(e.target.value))}
                min="1"
                className="text-lg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="missed">% Missed or delayed</Label>
              <Input
                id="missed"
                type="number"
                value={missedPercentage}
                onChange={(e) => setMissedPercentage(Number(e.target.value))}
                min="0"
                max="100"
                className="text-lg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="commission">Avg. commission ($)</Label>
              <Input
                id="commission"
                type="number"
                value={avgCommission}
                onChange={(e) => setAvgCommission(Number(e.target.value))}
                min="0"
                step="1000"
                className="text-lg"
              />
            </div>
          </div>

          {/* Results */}
          <motion.div
            key={`${monthlyLoss}-${yearlyLoss}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border-2 border-red-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-100 rounded-lg">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl">Your Estimated Revenue Loss</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-sm text-gray-600 mb-2">Per Month</div>
                <div className="flex items-baseline gap-2">
                  <DollarSign className="w-6 h-6 text-red-600" />
                  <span className="text-4xl text-red-600 tracking-tight">
                    {monthlyLoss.toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  ~{lostDeals.toFixed(1)} lost deals
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-sm text-gray-600 mb-2">Per Year</div>
                <div className="flex items-baseline gap-2">
                  <DollarSign className="w-6 h-6 text-red-600" />
                  <span className="text-4xl text-red-600 tracking-tight">
                    {yearlyLoss.toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  ~{(lostDeals * 12).toFixed(0)} lost deals
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/50 rounded-lg">
              <p className="text-sm text-gray-700 text-center">
                This calculation assumes a 10% conversion rate on properly followed-up enquiries.
                <br />
                <span className="text-red-700">Every delay costs you deals you'll never see.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </Card>
    </div>
  );
}
