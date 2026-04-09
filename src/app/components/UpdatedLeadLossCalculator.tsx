import { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingDown, DollarSign, AlertTriangle } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function UpdatedLeadLossCalculator() {
  const [weeklyEnquiries, setWeeklyEnquiries] = useState(20);
  const [avgCommission, setAvgCommission] = useState(15000);
  const [responseSpeed, setResponseSpeed] = useState<'instant' | '5min' | '1hr' | '3hr' | 'same_day'>('3hr');
  const [followUpQuality, setFollowUpQuality] = useState<'strong' | 'average' | 'poor'>('average');

  // Base conversion rate (perfect scenario)
  const baseConversionRate = 0.10; // 10%

  // Response time impact
  const responseMultiplier = {
    instant: 1.0,
    '5min': 0.9,
    '1hr': 0.7,
    '3hr': 0.5,
    same_day: 0.3,
  };

  // Follow up impact
  const followUpMultiplier = {
    strong: 1.0,
    average: 0.75,
    poor: 0.5,
  };

  // Calculate actual conversion rate
  const actualConversionRate = 
    baseConversionRate * 
    responseMultiplier[responseSpeed] * 
    followUpMultiplier[followUpQuality];

  // Deals calculations
  const idealDealsPerWeek = weeklyEnquiries * baseConversionRate;
  const actualDealsPerWeek = weeklyEnquiries * actualConversionRate;
  const lostDealsPerWeek = idealDealsPerWeek - actualDealsPerWeek;

  // Revenue calculations
  const lostRevenueWeekly = lostDealsPerWeek * avgCommission;
  const lostRevenueMonthly = lostRevenueWeekly * 4.33;
  const lostRevenueYearly = lostRevenueWeekly * 52;

  // Improvement potential
  const improvementPotential = ((idealDealsPerWeek - actualDealsPerWeek) / idealDealsPerWeek) * 100;
  const currentEfficiency = 100 - improvementPotential;

  // Confidence range
  const lowEstimate = lostRevenueMonthly * 0.7;
  const highEstimate = lostRevenueMonthly * 1.3;

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="p-8 md:p-10 bg-white shadow-xl">
        <div className="space-y-8">
          {/* Calculator Inputs */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="enquiries" className="text-base">Enquiries per week</Label>
              <Input
                id="enquiries"
                type="number"
                value={weeklyEnquiries}
                onChange={(e) => setWeeklyEnquiries(Number(e.target.value))}
                min="1"
                className="text-lg h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="commission" className="text-base">Average commission ($)</Label>
              <Input
                id="commission"
                type="number"
                value={avgCommission}
                onChange={(e) => setAvgCommission(Number(e.target.value))}
                min="0"
                step="1000"
                className="text-lg h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="response" className="text-base">Response speed</Label>
              <Select value={responseSpeed} onValueChange={(value: any) => setResponseSpeed(value)}>
                <SelectTrigger id="response" className="h-12 text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instant">Instant (automated)</SelectItem>
                  <SelectItem value="5min">Within 5 minutes</SelectItem>
                  <SelectItem value="1hr">Within 1 hour</SelectItem>
                  <SelectItem value="3hr">Within 3 hours</SelectItem>
                  <SelectItem value="same_day">Same day</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="followup" className="text-base">Follow-up quality</Label>
              <Select value={followUpQuality} onValueChange={(value: any) => setFollowUpQuality(value)}>
                <SelectTrigger id="followup" className="h-12 text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="strong">Strong (systematic & consistent)</SelectItem>
                  <SelectItem value="average">Average (occasional)</SelectItem>
                  <SelectItem value="poor">Poor (rarely follow up)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results */}
          <motion.div
            key={`${lostRevenueMonthly}-${currentEfficiency}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-red-50 via-orange-50 to-red-50 rounded-xl p-8 border-2 border-red-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-100 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl">Your Estimated Revenue Loss</h3>
                <p className="text-gray-600">Based on current response speed and follow-up quality</p>
              </div>
            </div>

            {/* Main Loss Amount */}
            <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Potentially Losing Per Month</div>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <DollarSign className="w-8 h-8 text-red-600" />
                  <span className="text-5xl md:text-6xl text-red-600 tracking-tight">
                    {lostRevenueMonthly.toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  Range: ${lowEstimate.toLocaleString('en-AU', { maximumFractionDigits: 0 })} – ${highEstimate.toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                </div>
              </div>
            </div>

            {/* Supporting Stats */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl text-red-600 mb-1">
                  {lostDealsPerWeek.toFixed(1)}
                </div>
                <div className="text-sm text-gray-600">Lost deals per week</div>
              </div>

              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl text-red-600 mb-1">
                  {currentEfficiency.toFixed(0)}%
                </div>
                <div className="text-sm text-gray-600">Operating at potential</div>
              </div>

              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl text-green-600 mb-1">
                  ${(lostRevenueYearly / 1000).toFixed(0)}K
                </div>
                <div className="text-sm text-gray-600">Lost yearly</div>
              </div>
            </div>

            {/* Insight */}
            <div className="p-4 bg-white/60 rounded-lg border border-red-200">
              <p className="text-center text-gray-700">
                <span className="text-red-700">
                  You could be closing {(idealDealsPerWeek - actualDealsPerWeek).toFixed(1)} more deals per week
                </span>
                {' '}with optimized response times and systematic follow-up
              </p>
            </div>
          </motion.div>
        </div>
      </Card>
    </div>
  );
}
