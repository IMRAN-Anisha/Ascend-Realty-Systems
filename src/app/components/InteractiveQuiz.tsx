import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ChevronRight, Download, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const quizQuestions = [
  {
    id: 1,
    question: "How fast do you typically respond to new enquiries?",
    options: [
      { value: "instant", label: "Instantly (within 1 minute)" },
      { value: "5-30min", label: "5 to 30 minutes" },
      { value: "1-3hr", label: "1 to 3 hours" },
      { value: "3-24hr", label: "3 to 24 hours" },
      { value: "next-day", label: "Next business day or later" }
    ]
  },
  {
    id: 2,
    question: "How many times do you follow up with a lead before giving up?",
    options: [
      { value: "none", label: "Just the initial response" },
      { value: "1-2", label: "1 to 2 times" },
      { value: "3-5", label: "3 to 5 times" },
      { value: "5-7", label: "5 to 7 times" },
      { value: "7plus", label: "7 plus times systematic follow up" }
    ]
  },
  {
    id: 3,
    question: "What percentage of enquiries do you estimate you miss or respond to late?",
    options: [
      { value: "none", label: "Almost none 0 to 5 percent" },
      { value: "some", label: "Some 5 to 15 percent" },
      { value: "moderate", label: "Moderate 15 to 30 percent" },
      { value: "many", label: "Quite a lot 30 to 50 percent" },
      { value: "most", label: "More than half 50 percent plus" }
    ]
  },
  {
    id: 4,
    question: "Do you have an automated system for lead follow up?",
    options: [
      { value: "full", label: "Yes fully automated and systematic" },
      { value: "partial", label: "Partially some automation" },
      { value: "manual", label: "No it is all manual" },
      { value: "none", label: "We do not really have a system" }
    ]
  },
  {
    id: 5,
    question: "How confident are you that no leads are slipping through the cracks?",
    options: [
      { value: "very", label: "Very confident we track everything" },
      { value: "somewhat", label: "Somewhat confident" },
      { value: "not-really", label: "Not very confident" },
      { value: "not-at-all", label: "Not confident at all" }
    ]
  }
];

const scoreMap = {
  1: {
    instant: 100,
    "5-30min": 80,
    "1-3hr": 60,
    "3-24hr": 30,
    "next-day": 10
  },
  2: {
    "7plus": 100,
    "5-7": 85,
    "3-5": 70,
    "1-2": 40,
    none: 10
  },
  3: {
    none: 100,
    some: 80,
    moderate: 60,
    many: 30,
    most: 10
  },
  4: {
    full: 100,
    partial: 70,
    manual: 40,
    none: 20
  },
  5: {
    very: 100,
    somewhat: 70,
    "not-really": 40,
    "not-at-all": 10
  }
};

export function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnswer = (value) => {
    setAnswers({
      ...answers,
      [currentQuestion]: value
    });
  };

  const calculateScore = () => {
    let total = 0;

    Object.entries(answers).forEach(([qIndex, value]) => {
      const qNum = Number(qIndex) + 1;
      total += scoreMap[qNum][value] || 0;
    });

    return Math.round(total / 5);
  };

  const getCategory = (score) => {
    if (score >= 85) return "High Performing System";
    if (score >= 65) return "Growing System";
    if (score >= 40) return "At Risk System";
    return "Critical Lead Leakage System";
  };

  const getLoss = (score) => {
    const baseLeads = 100;
    const avgConversion = 0.2;
    const avgCommission = 15000;

    let lossMultiplier = 0;

    if (score >= 85) lossMultiplier = 0.05;
    else if (score >= 65) lossMultiplier = 0.15;
    else if (score >= 40) lossMultiplier = 0.3;
    else lossMultiplier = 0.5;

    const lostDeals = baseLeads * avgConversion * lossMultiplier;

    return Math.round(lostDeals * avgCommission);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }

    const score = calculateScore();

    setResult({
      score,
      category: getCategory(score),
      loss: getLoss(score)
    });

    setShowEmailForm(true);
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (submitted) {
    return (
      <motion.div className="text-center py-12 max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>

        <h3 className="text-3xl mb-4">Check Your Email</h3>

        <p className="text-xl text-gray-600 mb-4">
          We sent your report to {email}
        </p>

        <p className="text-gray-500">
          Your report includes your score, category, and estimated revenue loss
        </p>
      </motion.div>
    );
  }

  if (showEmailForm) {
    return (
      <motion.div className="max-w-2xl mx-auto">
        <Card className="p-8 md:p-12">
          <div className="text-center mb-8">
            <Download className="w-10 h-10 mx-auto mb-4" />

            <h3 className="text-3xl mb-3">
              Your Lead Loss Report is Ready
            </h3>

            <p className="text-gray-600">
              Here is your system analysis based on your answers
            </p>
          </div>

          {result && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <p>Score {result.score} out of 100</p>
              <p>Category {result.category}</p>
              <p>Estimated Monthly Loss ${result.loss}</p>
            </div>
          )}

          <form onSubmit={handleSubmitEmail}>
            <Label>Email to receive report</Label>

            <div className="flex gap-3 mt-2">
              <div className="flex-1">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                />
              </div>

              <Button type="submit">
                Get Report
              </Button>
            </div>
          </form>
        </Card>
      </motion.div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const isAnswered = answers[currentQuestion] !== undefined;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span>
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>

          <span>{Math.round(progress)} percent</span>
        </div>

        <div className="h-2 bg-gray-200 rounded-full">
          <motion.div
            className="h-full bg-blue-600"
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={currentQuestion}>
          <Card className="p-8">
            <h3 className="text-2xl mb-6">
              {question.question}
            </h3>

            <RadioGroup
              value={answers[currentQuestion] || ""}
              onValueChange={handleAnswer}
            >
              {question.options.map((option) => (
                <label
                  key={option.value}
                  className="block p-4 border rounded mb-3 cursor-pointer"
                >
                  <RadioGroupItem value={option.value} />
                  <span className="ml-2">
                    {option.label}
                  </span>
                </label>
              ))}
            </RadioGroup>

            <div className="mt-6 text-right">
              <Button
                onClick={handleNext}
                disabled={!isAnswered}
              >
                Next
              </Button>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
