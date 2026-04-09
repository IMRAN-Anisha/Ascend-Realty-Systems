import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, Download, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

const quizQuestions = [
  {
    id: 1,
    question: 'How fast do you typically respond to new enquiries?',
    options: [
      { value: 'instant', label: 'Instantly (within 1 minute)' },
      { value: '5-30min', label: '5-30 minutes' },
      { value: '1-3hr', label: '1-3 hours' },
      { value: '3-24hr', label: '3-24 hours' },
      { value: 'next-day', label: 'Next business day or later' },
    ],
  },
  {
    id: 2,
    question: 'How many times do you follow up with a lead before giving up?',
    options: [
      { value: 'none', label: 'Just the initial response' },
      { value: '1-2', label: '1-2 times' },
      { value: '3-5', label: '3-5 times' },
      { value: '5-7', label: '5-7 times' },
      { value: '7plus', label: '7+ times (systematic follow-up)' },
    ],
  },
  {
    id: 3,
    question: 'What percentage of enquiries do you estimate you miss or respond to late?',
    options: [
      { value: 'none', label: 'Almost none (0-5%)' },
      { value: 'some', label: 'Some (5-15%)' },
      { value: 'moderate', label: 'A moderate amount (15-30%)' },
      { value: 'many', label: 'Quite a lot (30-50%)' },
      { value: 'most', label: 'More than half (50%+)' },
    ],
  },
  {
    id: 4,
    question: 'Do you have an automated system for lead follow-up?',
    options: [
      { value: 'full', label: 'Yes, fully automated and systematic' },
      { value: 'partial', label: 'Partially - some automation' },
      { value: 'manual', label: 'No, it\'s all manual' },
      { value: 'none', label: 'We don\'t really have a system' },
    ],
  },
  {
    id: 5,
    question: 'How confident are you that no leads are slipping through the cracks?',
    options: [
      { value: 'very', label: 'Very confident - we track everything' },
      { value: 'somewhat', label: 'Somewhat confident' },
      { value: 'not-really', label: 'Not very confident' },
      { value: 'not-at-all', label: 'Not confident at all' },
    ],
  },
];

export function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowEmailForm(true);
    }
  };

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    // In real implementation, send to backend
    setSubmitted(true);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl mb-4">Check Your Email!</h3>
        <p className="text-xl text-gray-600 mb-4">
          We've sent your personalized Lead Loss Report to <span className="text-blue-600">{email}</span>
        </p>
        <p className="text-gray-500">
          The report includes your quiz results, estimated revenue loss, and actionable recommendations to fix your lead flow.
        </p>
      </motion.div>
    );
  }

  if (showEmailForm) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-white">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Download className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl mb-3">Get Your Free Lead Loss Report</h3>
            <p className="text-lg text-gray-600">
              Based on your answers, we've calculated your potential revenue loss and identified key areas for improvement.
            </p>
          </div>

          <form onSubmit={handleSubmitEmail} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base">Enter your email to receive the report</Label>
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@agency.com"
                    className="pl-10 h-12 text-base"
                  />
                </div>
                <Button type="submit" size="lg" className="px-8">
                  Download Report
                </Button>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center">
              We'll also send you practical tips on improving your lead conversion
            </p>
          </form>
        </Card>
      </motion.div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const isAnswered = answers[currentQuestion] !== undefined;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-8 md:p-10 bg-white shadow-xl">
            <h3 className="text-2xl md:text-3xl mb-8">
              {question.question}
            </h3>

            <RadioGroup
              value={answers[currentQuestion] || ''}
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {question.options.map((option) => (
                <label
                  key={option.value}
                  className={`
                    flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer
                    transition-all hover:border-blue-300 hover:bg-blue-50
                    ${answers[currentQuestion] === option.value 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200'
                    }
                  `}
                >
                  <RadioGroupItem value={option.value} id={option.value} />
                  <span className="text-base flex-1">{option.label}</span>
                </label>
              ))}
            </RadioGroup>

            <div className="mt-8 flex justify-end">
              <Button
                onClick={handleNext}
                disabled={!isAnswered}
                size="lg"
                className="px-8"
              >
                {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
