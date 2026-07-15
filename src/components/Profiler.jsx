import { useState, useRef, useCallback } from 'react';
import { 
  FaCircleNodes, 
  FaSpinner, 
  FaRotate,
  FaWhatsapp
} from 'react-icons/fa6';
import { FaRegCircle } from 'react-icons/fa';

export const Profiler = () => {
    // State for managing UI updates
    const [score, setScore] = useState(null);
    const [status, setStatus] = useState('UNASSESSED');
    const [statusColor, setStatusColor] = useState('text-[#0284c7] dark:text-skyBrand');
    const [analysisMessage, setAnalysisMessage] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Refs for DOM elements that need direct manipulation
    const gaugeCircleRef = useRef(null);
    const scoreDisplayRef = useRef(null);
    const statusTextRef = useRef(null);
    const analysisMsgRef = useRef(null);
    const resultCardRef = useRef(null);
    const waLinkRef = useRef(null);
    const formRef = useRef(null);

    // Form field refs for better performance
    const destinationRef = useRef(null);
    const corporateStatusRef = useRef(null);
    const travelGapsRef = useRef(null);
    const bankStatementRef = useRef(null);

    // Scoring configuration
    const scoringConfig = {
        destination: {
            Schengen: 10,
            UK: 9,
            Gulf: 7,
            US_Canada: 8,
            default: 5
        },
        status: {
            activeFiler: 10,
            salaried: 8,
            nonFiler: 5,
            student: 6,
            default: 5
        },
        gaps: {
            robust: 10,
            moderate: 7,
            fresh: 4,
            default: 5
        },
        bank: {
            high: 10,
            moderate: 7,
            low: 4,
            default: 5
        }
    };

    const processAssessmentReport = useCallback((e) => {
        e.preventDefault();
        setIsLoading(true);

        // Use requestAnimationFrame for smooth UI updates
        requestAnimationFrame(() => {
            try {
                // Get values using refs
                const dest = destinationRef.current?.value || '';
                const status = corporateStatusRef.current?.value || '';
                const gaps = travelGapsRef.current?.value || '';
                const bank = bankStatementRef.current?.value || '';

                // Calculate score
                let totalScore = 0;
                totalScore += scoringConfig.destination[dest] || scoringConfig.destination.default;
                totalScore += scoringConfig.status[status] || scoringConfig.status.default;
                totalScore += scoringConfig.gaps[gaps] || scoringConfig.gaps.default;
                totalScore += scoringConfig.bank[bank] || scoringConfig.bank.default;

                const maxScore = 40;
                const percentage = Math.min(100, Math.round((totalScore / maxScore) * 100));

                // Update state
                setScore(percentage);

                // Update gauge circle
                if (gaugeCircleRef.current) {
                    const circumference = 339.2;
                    const offset = circumference - (percentage / 100) * circumference;
                    gaugeCircleRef.current.style.strokeDashoffset = offset;
                }

                // Update score display
                if (scoreDisplayRef.current) {
                    scoreDisplayRef.current.textContent = `${percentage}%`;
                }

                // Determine status and message
                let statusLabel, msg, color;
                if (percentage >= 80) {
                    statusLabel = "STRONG PROFILE";
                    msg = "Great! Your profile aligns with high embassy success rates.";
                    color = "text-emerald-500 dark:text-emerald-400";
                } else if (percentage >= 55) {
                    statusLabel = "MODERATE CASE";
                    msg = "Decent profile. Consult us to boost weak areas before filing.";
                    color = "text-amber-500 dark:text-amber-400";
                } else {
                    statusLabel = "NEEDS ENHANCEMENT";
                    msg = "Profile requires strengthening. Click below for free assessment.";
                    color = "text-red-500 dark:text-red-400";
                }

                // Update state and DOM
                setStatus(statusLabel);
                setStatusColor(color);
                setAnalysisMessage(msg);
                setShowResult(true);

                if (statusTextRef.current) {
                    statusTextRef.current.textContent = statusLabel;
                    statusTextRef.current.className = `block text-[7px] uppercase tracking-widest font-extrabold ${color}`;
                }

                if (analysisMsgRef.current) {
                    analysisMsgRef.current.textContent = msg;
                }

                if (resultCardRef.current) {
                    resultCardRef.current.classList.remove('hidden');
                }

                // Update WhatsApp link
                if (waLinkRef.current) {
                    const message = `Hi Sky Routes, my visa case strength score is ${percentage}%. Please advise on next steps.`;
                    waLinkRef.current.href = `https://wa.me/923111101470?text=${encodeURIComponent(message)}`;
                }

                // Show success notification
                showNotification(`Assessment completed - ${percentage}% score`, 'success');

            } catch (error) {
                console.error('Assessment error:', error);
                showNotification('Failed to process assessment. Please try again.', 'error');
            } finally {
                setIsLoading(false);
            }
        });
    }, [scoringConfig]);

    // Toast notification function
    const showNotification = (message, type = 'info') => {
        // You can replace this with your preferred toast library
        if (typeof window !== 'undefined' && window.showToast) {
            window.showToast(message, type);
        } else {
            // Fallback alert for development
            if (process.env.NODE_ENV === 'development') {
                console.log(`[${type.toUpperCase()}] ${message}`);
            }
        }
    };

    // Reset form handler
    const resetForm = useCallback(() => {
        if (formRef.current) {
            formRef.current.reset();
        }
        setScore(null);
        setStatus('UNASSESSED');
        setStatusColor('text-[#0284c7] dark:text-skyBrand');
        setAnalysisMessage('');
        setShowResult(false);
        setIsLoading(false);

        // Reset gauge
        if (gaugeCircleRef.current) {
            gaugeCircleRef.current.style.strokeDashoffset = 339.2;
        }
        if (scoreDisplayRef.current) {
            scoreDisplayRef.current.textContent = '--';
        }
        if (statusTextRef.current) {
            statusTextRef.current.textContent = 'UNASSESSED';
            statusTextRef.current.className = 'block text-[7px] uppercase tracking-widest text-[#0284c7] dark:text-skyBrand font-extrabold';
        }
        if (resultCardRef.current) {
            resultCardRef.current.classList.add('hidden');
        }
        if (analysisMsgRef.current) {
            analysisMsgRef.current.textContent = '';
        }
    }, []);

    return (
        <>
            <section id="profiler" className="py-24 bg-white dark:bg-[#070a13] border-t border-slate-100 dark:border-slate-800/60 transition-colors duration-300">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-lightBg dark:bg-slate-900 p-6 md:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl relative overflow-hidden transition-colors duration-300">
                        <div className="absolute inset-0 bg-gradient-to-tr from-skyBrand/5 via-transparent to-transparent pointer-events-none"></div>
                        
                        <div className="text-center mb-10 relative z-10">
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#0284c7] dark:text-skyBrand block mb-3">
                                <FaCircleNodes className="inline mr-1.5" /> Visa Case Profiler
                            </span>
                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4">
                                PORTAL CASE STRENGTH MEASURE
                            </h3>
                            <p className="text-slateText dark:text-slate-400 text-xs font-medium max-w-xl mx-auto mt-2">
                                Answer dynamic questions below to calculate and assess your embassy file alignment instantly.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                            {/* Form Section */}
                            <div className="lg:col-span-8 space-y-4">
                                <form ref={formRef} id="profilerForm" onSubmit={processAssessmentReport}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="conDestination" className="block text-[8px] font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-1.5">
                                                TARGET DESIGNATION
                                            </label>
                                            <select
                                                ref={destinationRef}
                                                id="conDestination"
                                                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-3 text-[11px] text-slate-800 dark:text-white font-bold focus:border-[#0284c7] focus:outline-none transition focus:ring-2 focus:ring-[#0284c7]/20 dark:focus:ring-skyBrand/20"
                                                aria-label="Select target destination"
                                            >
                                                <option value="Schengen">Schengen Area (Europe States)</option>
                                                <option value="UK">United Kingdom (UK Consulate)</option>
                                                <option value="Gulf">Gulf Cooperation (GCC States)</option>
                                                <option value="US_Canada">United States / Canada Route</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="corporateStatus" className="block text-[8px] font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-1.5">
                                                TAX/FILER STATUS
                                            </label>
                                            <select
                                                ref={corporateStatusRef}
                                                id="corporateStatus"
                                                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-3 text-[11px] text-slate-800 dark:text-white font-bold focus:border-[#0284c7] focus:outline-none transition focus:ring-2 focus:ring-[#0284c7]/20 dark:focus:ring-skyBrand/20"
                                                aria-label="Select tax or filer status"
                                            >
                                                <option value="activeFiler">Active Filer (Tax records + corporate)</option>
                                                <option value="salaried">Salaried Employee (Official bank letters)</option>
                                                <option value="nonFiler">Non-Filer / Fresh Business Setup</option>
                                                <option value="student">Student / Dependent Status</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="travelGaps" className="block text-[8px] font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-1.5">
                                                PASSPORT TRAVEL GAPS
                                            </label>
                                            <select
                                                ref={travelGapsRef}
                                                id="travelGaps"
                                                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-3 text-[11px] text-slate-800 dark:text-white font-bold focus:border-[#0284c7] focus:outline-none transition focus:ring-2 focus:ring-[#0284c7]/20 dark:focus:ring-skyBrand/20"
                                                aria-label="Select passport travel history"
                                            >
                                                <option value="robust">Robust History (Visited Europe, UK, or GCC)</option>
                                                <option value="moderate">Moderate History (1 or 2 GCC/Asian countries)</option>
                                                <option value="fresh">Fresh Passport (Blank travel history)</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="bankStatement" className="block text-[8px] font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-1.5">
                                                CLEAN BANK BALANCE
                                            </label>
                                            <select
                                                ref={bankStatementRef}
                                                id="bankStatement"
                                                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-3 text-[11px] text-slate-800 dark:text-white font-bold focus:border-[#0284c7] focus:outline-none transition focus:ring-2 focus:ring-[#0284c7]/20 dark:focus:ring-skyBrand/20"
                                                aria-label="Select bank balance status"
                                            >
                                                <option value="high">Sufficiently high balance (Well maintained)</option>
                                                <option value="moderate">Moderate balance matching plan duration</option>
                                                <option value="low">Low balance or unstable cash flows</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="flex-1 bg-[#0284c7] dark:bg-skyBrand hover:bg-sky-700 dark:hover:bg-sky-400 text-white dark:text-slate-950 font-extrabold py-3.5 px-4 rounded-xl text-[10px] uppercase tracking-widest transition duration-300 shadow-lg shadow-blue-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <FaSpinner className="inline mr-2 animate-spin" />
                                                    PROCESSING...
                                                </>
                                            ) : (
                                                'PROCESS ASSESSMENT REPORT'
                                            )}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={resetForm}
                                            className="px-4 py-3.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 font-extrabold rounded-xl text-[10px] uppercase tracking-widest transition"
                                            aria-label="Reset form"
                                        >
                                            <FaRotate />
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Circular Gauge Section */}
                            <div className="lg:col-span-4 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-200/80 dark:border-slate-700/80 pt-6 lg:pt-0 lg:pl-6">
                                <div className="relative w-36 h-36 flex items-center justify-center bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow-inner">
                                    <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                                        <circle
                                            className="fill-none stroke-slate-200 dark:stroke-slate-700 stroke-[5]"
                                            cx="89"
                                            cy="90"
                                            r="75"
                                        />
                                        <circle
                                            ref={gaugeCircleRef}
                                            id="gaugeProgressCircle"
                                            className="fill-none stroke-[#0284c7] dark:stroke-skyBrand stroke-[5] stroke-linecap-round transition-all duration-1000 ease-out"
                                            cx="89"
                                            cy="90"
                                            r="75"
                                            strokeDasharray="339.2"
                                            strokeDashoffset="339.2"
                                        />
                                    </svg>
                                    
                                    <div className="text-center z-10 select-none">
                                        <span className="block text-[7px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">
                                            SCORE
                                        </span>
                                        <span
                                            ref={scoreDisplayRef}
                                            id="gaugeScoreVal"
                                            className="block text-2xl font-black text-slate-800 dark:text-white my-0.5"
                                        >
                                            --
                                        </span>
                                        <span
                                            ref={statusTextRef}
                                            id="gaugeStatusText"
                                            className="block text-[7px] uppercase tracking-widest text-[#0284c7] dark:text-skyBrand font-extrabold"
                                        >
                                            UNASSESSED
                                        </span>
                                    </div>
                                </div>

                                {/* Result Card */}
                                <div
                                    ref={resultCardRef}
                                    id="gaugeResultCard"
                                    className={`text-center mt-4 animate-fadeIn ${showResult ? 'block' : 'hidden'}`}
                                >
                                    <p
                                        ref={analysisMsgRef}
                                        id="gaugeAnalysisMsg"
                                        className="text-slateText dark:text-slate-300 text-[10px] leading-relaxed max-w-[180px] mb-2 font-semibold"
                                    >
                                        {analysisMessage}
                                    </p>
                                    <a
                                        ref={waLinkRef}
                                        id="gaugeWaRedir"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-3 py-1.5 rounded-lg text-[8px] uppercase tracking-widest transition shadow-lg shadow-emerald-500/10 hover:scale-105 transform duration-200"
                                    >
                                        <FaWhatsapp className="text-[10px]" />
                                        Boost Score Free
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Add animation styles if not globally defined */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out forwards;
                }
            `}</style>
        </>
    );
};