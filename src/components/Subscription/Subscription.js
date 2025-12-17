import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations/translations';
import SEO from '../SEO/SEO';
import { getSEOConfig } from '../SEO/seoConfig';
import { countries } from '../../data/countries';
import './Subscription.css';

/**
 * Subscription Form Component
 * This form is publicly accessible - no login or authentication required.
 * Anyone can fill out and submit the application form.
 */
function Subscription() {
  const { language, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    height: '',
    weight: '',
    idealWeight: '',
    phoneNumber: '',
    emailAddress: '',
    cityCountry: '',
    maritalStatus: '',
    haveChildren: '',
    ultimateGoal: '',
    top3Goals: '',
    lastSeasonGoal: '',
    importanceScale: '',
    whatToGain: '',
    whatLimiting: [],
    otherSpecify: '',
    workStudyHours: '',
    workStressLevel: '',
    availableTrainingSlots: [],
    sleepSchedule: '',
    overallSkillLevel: '',
    swimmingSkillLevel: '',
    swimmingHistory: '',
    cyclingSkillLevel: '',
    cyclingHistory: '',
    runningSkillLevel: '',
    runningHistory: '',
    powerMeter: '',
    powerMeterDetails: '',
    heartRateMonitor: '',
    heartRateMonitorDetails: '',
    trainingEquipment: '',
    longestDistances: [],
    vo2MaxTest: '',
    twoGreatestStrengths: '',
    twoBiggestLimiters: '',
    biggestChallenge: [],
    pastCurrentInjuries: '',
    injuryDetails: '',
    seePhysicalTherapist: '',
    chronicInjuriesConditions: '',
    chronicDetails: '',
    medicationsSupplements: '',
    medicationsList: '',
    typicalDayEating: '',
    dailyWaterIntake: '',
    exerciseHydration: '',
    foodAllergiesRestrictions: '',
    whatWantFromCoaching: '',
    whatMotivatesAthlete: '',
    biggestTechnicalPhysicalChallenges: '',
    handlePressureRaces: '',
    proudAccomplishments: '',
    interestedCoach: [],
    needCallHeadCoach: '',
    anythingElse: ''
  });
  const [ageDisplay, setAgeDisplay] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedPhoneCountry, setSelectedPhoneCountry] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showPhoneCountryDropdown, setShowPhoneCountryDropdown] = useState(false);
  const [countrySearchTerm, setCountrySearchTerm] = useState('');
  const [phoneCountrySearchTerm, setPhoneCountrySearchTerm] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Refs for click outside detection
  const countryDropdownRef = useRef(null);
  const phoneCountryDropdownRef = useRef(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [currentSection, setCurrentSection] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const totalSections = 10; // Will increase as we add more sections

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setShowCountryDropdown(false);
      }
      if (phoneCountryDropdownRef.current && !phoneCountryDropdownRef.current.contains(event.target)) {
        setShowPhoneCountryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Calculate age from date of birth
  const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return '';
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  // Validate positive numbers
  const validatePositiveNumber = (value, fieldName) => {
    // Don't validate if field is empty (empty check is handled separately)
    if (!value || value.trim() === '') {
      return null;
    }
    const num = parseFloat(value);
    if (isNaN(num) || num <= 0) {
      const fieldTranslation = getTranslation(`subscription.${fieldName.toLowerCase()}`, language) || fieldName;
      return getTranslation('subscription.mustBePositive', language).replace('{field}', fieldTranslation);
    }
    return null;
  };

  // Validate email format
  const validateEmail = (email) => {
    // Don't validate if field is empty (empty check is handled separately)
    if (!email || email.trim() === '') {
      return null;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return getTranslation('subscription.validEmail', language);
    }
    return null;
  };

  // Validate date of birth (minimum 15 years old)
  const validateDateOfBirth = (dateOfBirth) => {
    if (!dateOfBirth) return null;
    const age = calculateAge(dateOfBirth);
    if (age < 15) {
      return getTranslation('subscription.mustBe15', language);
    }
    return null;
  };

  // Filter countries based on search term
  const getFilteredCountries = (searchTerm) => {
    return countries.filter(country => 
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Handle country selection for city/country
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setFormData(prev => ({
      ...prev,
      cityCountry: country.name
    }));
    setShowCountryDropdown(false);
    setCountrySearchTerm('');
  };

  // Handle phone country selection
  const handlePhoneCountrySelect = (country) => {
    setSelectedPhoneCountry(country);
    setFormData(prev => ({
      ...prev,
      phoneNumber: country.phone + ' '
    }));
    setShowPhoneCountryDropdown(false);
    setPhoneCountrySearchTerm('');
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Clear validation errors for this field
    setValidationErrors(prev => ({
      ...prev,
      [name]: null
    }));
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked 
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));

      // Handle special validations
      if (name === 'dateOfBirth') {
        const age = calculateAge(value);
        setAgeDisplay(age > 0 ? getTranslation('subscription.ageDisplay', language).replace('{age}', age) : '');
        
        const error = validateDateOfBirth(value);
        setValidationErrors(prev => ({
          ...prev,
          [name]: error || null
        }));
      } else if (name === 'height' || name === 'weight' || name === 'idealWeight') {
        const fieldName = name === 'height' ? getTranslation('subscription.fieldHeight', language) : name === 'weight' ? getTranslation('subscription.fieldWeight', language) : getTranslation('subscription.fieldIdealWeight', language);
        const error = validatePositiveNumber(value, fieldName);
        setValidationErrors(prev => ({
          ...prev,
          [name]: error || null
        }));
      } else if (name === 'emailAddress') {
        const error = validateEmail(value);
        setValidationErrors(prev => ({
          ...prev,
          [name]: error || null
        }));
      }
    }
  };

  const requiredFields = {
    1: ['fullName', 'dateOfBirth', 'height', 'weight', 'idealWeight', 'phoneNumber', 'emailAddress', 'cityCountry', 'maritalStatus', 'haveChildren'],
    2: ['ultimateGoal', 'top3Goals', 'lastSeasonGoal', 'importanceScale', 'whatToGain'],
    3: ['whatLimiting', 'workStudyHours', 'workStressLevel', 'availableTrainingSlots', 'sleepSchedule'],
    4: ['overallSkillLevel', 'swimmingSkillLevel', 'swimmingHistory', 'cyclingSkillLevel', 'cyclingHistory', 'runningSkillLevel', 'runningHistory'],
    5: ['powerMeter', 'heartRateMonitor', 'trainingEquipment'],
    6: ['longestDistances', 'vo2MaxTest'],
    7: ['twoGreatestStrengths', 'twoBiggestLimiters', 'biggestChallenge'],
    8: ['pastCurrentInjuries', 'seePhysicalTherapist', 'chronicInjuriesConditions', 'medicationsSupplements'],
    9: ['typicalDayEating', 'dailyWaterIntake', 'exerciseHydration', 'foodAllergiesRestrictions'],
    10: ['whatWantFromCoaching', 'whatMotivatesAthlete', 'biggestTechnicalPhysicalChallenges', 'handlePressureRaces', 'proudAccomplishments', 'interestedCoach', 'needCallHeadCoach']
  };

  // Helper function to check if a field should show red (required and empty)
  const isFieldRequiredAndEmpty = (fieldName) => {
    const currentRequiredFields = requiredFields[currentSection] || [];
    
    // Check if field is required in current section
    if (!currentRequiredFields.includes(fieldName)) {
      return false;
    }
    
    const value = formData[fieldName];
    
    // Check if field is empty
    const isEmpty = !value || 
                   (typeof value === 'string' && value.trim() === '') || 
                   (Array.isArray(value) && value.length === 0);
    
    if (!isEmpty) {
      return false;
    }
    
    // Check for conditional fields
    if (fieldName === 'injuryDetails' && formData.pastCurrentInjuries !== 'yes') return false;
    if (fieldName === 'chronicDetails' && formData.chronicInjuriesConditions !== 'yes') return false;
    if (fieldName === 'medicationsList' && formData.medicationsSupplements !== 'yes') return false;
    if (fieldName === 'powerMeterDetails' && formData.powerMeter !== 'yes') return false;
    if (fieldName === 'heartRateMonitorDetails' && formData.heartRateMonitor !== 'yes') return false;
    if (fieldName === 'otherSpecify' && (!Array.isArray(formData.whatLimiting) || !formData.whatLimiting.includes('other'))) return false;
    
    return true;
  };

  const validateCurrentSection = () => {
    const currentRequiredFields = requiredFields[currentSection] || [];
    
    for (const field of currentRequiredFields) {
      const value = formData[field];
      
      // Check if field is empty or if it's an array and empty
      // Also check for whitespace-only strings
      const isEmpty = !value || 
                     (typeof value === 'string' && value.trim() === '') || 
                     (Array.isArray(value) && value.length === 0);
      
      if (isEmpty) {
        // Check for conditional fields
        if (field === 'injuryDetails' && formData.pastCurrentInjuries !== 'yes') continue;
        if (field === 'chronicDetails' && formData.chronicInjuriesConditions !== 'yes') continue;
        if (field === 'medicationsList' && formData.medicationsSupplements !== 'yes') continue;
        if (field === 'powerMeterDetails' && formData.powerMeter !== 'yes') continue;
        if (field === 'heartRateMonitorDetails' && formData.heartRateMonitor !== 'yes') continue;
        if (field === 'otherSpecify' && (!Array.isArray(formData.whatLimiting) || !formData.whatLimiting.includes('other'))) continue;
        
        return false;
      }
      
      // Check for validation errors only if field is not empty
      // This prevents blocking on format errors when field is empty (empty is already checked above)
      if (validationErrors[field]) {
        return false;
      }
    }
    
    return true;
  };

  const nextSection = () => {
    if (currentSection < totalSections) {
      if (validateCurrentSection()) {
        setCurrentSection(currentSection + 1);
      } else {
        setModalMessage(getTranslation('subscription.fillRequiredFields', language));
        setShowModal(true);
      }
    }
  };

  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  const goToSection = (sectionNumber) => {
    // Only allow navigation to previous sections or current section
    if (sectionNumber <= currentSection) {
      setCurrentSection(sectionNumber);
    } else {
      setModalMessage(getTranslation('subscription.completeCurrentSection', language));
      setShowModal(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Organize form data by sections for better email formatting
      const organizedData = language === 'ar' ? {
        // Section 1: Personal & Contact Information (Arabic)
        '=== المعلومات الشخصية ===': '',
        'الاسم بالكامل': formData.fullName,
        'تاريخ الميلاد': formData.dateOfBirth,
        'الطول (سم)': formData.height,
        'الوزن (كج)': formData.weight,
        'الوزن المثالي (كج)': formData.idealWeight,
        'رقم الهاتف': formData.phoneNumber,
        'البريد الإلكتروني': formData.emailAddress,
        'المدينة والبلد': formData.cityCountry,
        'الحالة الاجتماعية': formData.maritalStatus,
        'هل لديك أطفال': formData.haveChildren,
        
        // Section 2: Athletic Goals (Arabic)
        '=== الأهداف الرياضية ===': '',
        'الهدف النهائي (3-5 سنوات)': formData.ultimateGoal,
        'أهم 3 أهداف هذا الموسم': formData.top3Goals,
        'هدف الموسم الماضي': formData.lastSeasonGoal,
        'مقياس الأهمية (1-10)': formData.importanceScale,
        'ما الذي ستجنيه': formData.whatToGain,
        
        // Section 3: Training Availability & Lifestyle (Arabic)
        '=== توفر التدريب ونمط الحياة ===': '',
        'ما الذي يمنعك': formData.whatLimiting,
        'عامل مقيد آخر': formData.otherSpecify,
        'ساعات العمل/الدراسة أسبوعياً': formData.workStudyHours,
        'مستوى توتر العمل (1-10)': formData.workStressLevel,
        'الأوقات المتاحة للتدريب': formData.availableTrainingSlots,
        'جدول النوم': formData.sleepSchedule,
        
        // Section 4: Current Skill & Experience (Arabic)
        '=== المهارات الحالية والخبرة ===': '',
        'المستوى العام (1-5)': formData.overallSkillLevel,
        'مستوى السباحة': formData.swimmingSkillLevel,
        'تاريخ السباحة': formData.swimmingHistory,
        'مستوى ركوب الدراجات': formData.cyclingSkillLevel,
        'تاريخ ركوب الدراجات': formData.cyclingHistory,
        'مستوى الجري': formData.runningSkillLevel,
        'تاريخ الجري': formData.runningHistory,
        
        // Section 5: Training Equipment & Technology (Arabic)
        '=== معدات التدريب والتكنولوجيا ===': '',
        'تدريب باور ميتر': formData.powerMeter,
        'تفاصيل باور ميتر': formData.powerMeterYes,
        'مراقب نبضات القلب': formData.heartRateMonitor,
        'تفاصيل مراقب نبضات القلب': formData.heartRateMonitorYes,
        'معدات التدريب': formData.trainingEquipment,
        
        // Section 6: Performance & Past Races (Arabic)
        '=== الأداء والسباقات السابقة ===': '',
        'أطول المسافات (6 شهور)': formData.longestDistances,
        'وقت 5K': formData.run5K,
        'وقت 10K': formData.run10K,
        'وقت نصف الماراثون': formData.halfMarathon,
        'وقت الماراثون': formData.marathon,
        'وقت 100م سباحة': formData.swim100m,
        'وقت 200م سباحة': formData.swim200m,
        'وقت 400م سباحة': formData.swim400m,
        'وقت 1K سباحة': formData.swim1K,
        'وقت المسافة القصيرة': formData.sprintDistance,
        'وقت المسافة الأولمبية': formData.olympicDistance,
        'وقت نصف الحديد': formData.halfIronman,
        'وقت الحديد الكامل': formData.fullIronman,
        'تفاصيل اختبار VO2 Max/FTP': formData.vo2MaxTest,
        
        // Section 7: Challenges & Limiters (Arabic)
        '=== التحديات والمعوقات ===': '',
        'أقوى نقطتين': formData.twoGreatestStrengths,
        'أكبر نقطتي ضعف': formData.twoBiggestLimiters,
        'أكبر تحد': formData.biggestChallenge,
        'تحد آخر': formData.otherChallenge,
        
        // Section 8: Medical & Injury History (Arabic)
        '=== السجل الطبي والإصابات ===': '',
        'إصابات سابقة/حالية': formData.pastCurrentInjuries,
        'تفاصيل الإصابات': formData.injuryDetails,
        'زيارة معالج طبيعي': formData.seePhysicalTherapist,
        'إصابات/حالات مزمنة': formData.chronicInjuriesConditions,
        'تفاصيل مزمنة': formData.chronicDetails,
        'أدوية/مكملات': formData.medicationsSupplements,
        'قائمة الأدوية': formData.medicationsList,
        
        // Section 9: Nutrition & Recovery Habits (Arabic)
        '=== العادات الغذائية والتعافي ===': '',
        'الأكل المعتاد': formData.typicalDayEating,
        'استهلاك الماء اليومي': formData.dailyWaterIntake,
        'ترطيب التمرين': formData.exerciseHydration,
        'حساسية/قيود غذائية': formData.foodAllergiesRestrictions,
        
        // Section 10: Final Notes & Expectations (Arabic)
        '=== الملاحظات والتوقعات النهائية ===': '',
        'ما تريده من التدريب': formData.whatWantFromCoaching,
        'ما يحفزك كرياضي': formData.whatMotivatesAthlete,
        'أكبر التحديات التقنية/البدنية': formData.biggestTechnicalPhysicalChallenges,
        'التعامل مع الضغط في السباقات': formData.handlePressureRaces,
        'الإنجازات المفتخر بها': formData.proudAccomplishments,
        'المدرب المهتم به': formData.interestedCoach,
        'حاجة لمكالمة مع المدرب الرئيسي': formData.needCallHeadCoach,
        'أي شيء آخر': formData.anythingElse
      } : {
        // Section 1: Personal & Contact Information (English)
        '=== PERSONAL & CONTACT INFORMATION ===': '',
        'Full Name': formData.fullName,
        'Date of Birth': formData.dateOfBirth,
        'Height (cm)': formData.height,
        'Weight (kg)': formData.weight,
        'Ideal Weight (kg)': formData.idealWeight,
        'Phone Number': formData.phoneNumber,
        'Email Address': formData.emailAddress,
        'City & Country': formData.cityCountry,
        'Marital Status': formData.maritalStatus,
        'Has Children': formData.haveChildren,
        
        // Section 2: Athletic Goals (English)
        '=== ATHLETIC GOALS ===': '',
        'Ultimate Goal (3-5 years)': formData.ultimateGoal,
        'Top 3 Goals This Season': formData.top3Goals,
        'Last Season Goal': formData.lastSeasonGoal,
        'Importance Scale (1-10)': formData.importanceScale,
        'What to Gain': formData.whatToGain,
        
        // Section 3: Training Availability & Lifestyle (English)
        '=== TRAINING AVAILABILITY & LIFESTYLE ===': '',
        'What is Limiting You': formData.whatLimiting,
        'Other Limiting Factor': formData.otherSpecify,
        'Work/Study Hours per Week': formData.workStudyHours,
        'Work Stress Level (1-10)': formData.workStressLevel,
        'Available Training Slots': formData.availableTrainingSlots,
        'Sleep Schedule': formData.sleepSchedule,
        
        // Section 4: Current Skill & Experience (English)
        '=== CURRENT SKILL & EXPERIENCE ===': '',
        'Overall Skill Level (1-5)': formData.overallSkillLevel,
        'Swimming Skill Level': formData.swimmingSkillLevel,
        'Swimming History': formData.swimmingHistory,
        'Cycling Skill Level': formData.cyclingSkillLevel,
        'Cycling History': formData.cyclingHistory,
        'Running Skill Level': formData.runningSkillLevel,
        'Running History': formData.runningHistory,
        
        // Section 5: Training Equipment & Technology (English)
        '=== TRAINING EQUIPMENT & TECHNOLOGY ===': '',
        'Power Meter Training': formData.powerMeter,
        'Power Meter Details': formData.powerMeterYes,
        'Heart Rate Monitor': formData.heartRateMonitor,
        'Heart Rate Monitor Details': formData.heartRateMonitorYes,
        'Training Equipment': formData.trainingEquipment,
        
        // Section 6: Performance & Past Races (English)
        '=== PERFORMANCE & PAST RACES ===': '',
        'Longest Distances (6 months)': formData.longestDistances,
        '5K Run Time': formData.run5K,
        '10K Run Time': formData.run10K,
        'Half Marathon Time': formData.halfMarathon,
        'Marathon Time': formData.marathon,
        '100m Swim Time': formData.swim100m,
        '200m Swim Time': formData.swim200m,
        '400m Swim Time': formData.swim400m,
        '1K Swim Time': formData.swim1K,
        'Sprint Distance Time': formData.sprintDistance,
        'Olympic Distance Time': formData.olympicDistance,
        'Half Ironman Time': formData.halfIronman,
        'Full Ironman Time': formData.fullIronman,
        'VO2 Max/FTP Test Details': formData.vo2MaxTest,
        
        // Section 7: Challenges & Limiters (English)
        '=== CHALLENGES & LIMITERS ===': '',
        'Two Greatest Strengths': formData.twoGreatestStrengths,
        'Two Biggest Limiters': formData.twoBiggestLimiters,
        'Biggest Challenge': formData.biggestChallenge,
        'Other Challenge': formData.otherChallenge,
        
        // Section 8: Medical & Injury History (English)
        '=== MEDICAL & INJURY HISTORY ===': '',
        'Past/Current Injuries': formData.pastCurrentInjuries,
        'Injury Details': formData.injuryDetails,
        'See Physical Therapist': formData.seePhysicalTherapist,
        'Chronic Injuries/Conditions': formData.chronicInjuriesConditions,
        'Chronic Details': formData.chronicDetails,
        'Medications/Supplements': formData.medicationsSupplements,
        'Medications List': formData.medicationsList,
        
        // Section 9: Nutrition & Recovery Habits (English)
        '=== NUTRITION & RECOVERY HABITS ===': '',
        'Typical Day Eating': formData.typicalDayEating,
        'Daily Water Intake': formData.dailyWaterIntake,
        'Exercise Hydration': formData.exerciseHydration,
        'Food Allergies/Restrictions': formData.foodAllergiesRestrictions,
        
        // Section 10: Final Notes & Expectations (English)
        '=== FINAL NOTES & EXPECTATIONS ===': '',
        'What Want From Coaching': formData.whatWantFromCoaching,
        'What Motivates Athlete': formData.whatMotivatesAthlete,
        'Biggest Technical/Physical Challenges': formData.biggestTechnicalPhysicalChallenges,
        'Handle Pressure in Races': formData.handlePressureRaces,
        'Proud Accomplishments': formData.proudAccomplishments,
        'Interested Coach': formData.interestedCoach,
        'Need Call with Head Coach': formData.needCallHeadCoach,
        'Anything Else': formData.anythingElse
      };

      // Using FormSubmit service to send email
      const response = await fetch('https://formsubmit.co/q9g8moh@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...organizedData,
          _subject: language === 'ar' ? 'طلب انضمام جديد - Podium Racing الشرق الأوسط' : 'New Subscription Form Submission - Podium Racing ME',
          _template: 'table',
          _captcha: 'false',
          _next: window.location.href,
          _replyto: formData.emailAddress,
          _cc: 'q9g8moh@gmail.com'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        
        // Show success popup
        setModalMessage(getTranslation('subscription.successMessage', language));
        setShowModal(true);
        
        // Reset form data
        setFormData({
          fullName: '',
          dateOfBirth: '',
          height: '',
          weight: '',
          idealWeight: '',
          phoneNumber: '',
          emailAddress: '',
          cityCountry: '',
          maritalStatus: '',
          haveChildren: '',
          ultimateGoal: '',
          top3Goals: '',
          lastSeasonGoal: '',
          importanceScale: '',
          whatToGain: '',
          whatLimiting: [],
          otherSpecify: '',
          workStudyHours: '',
          workStressLevel: '',
          availableTrainingSlots: [],
          sleepSchedule: '',
          overallSkillLevel: '',
          swimmingSkillLevel: '',
          swimmingHistory: '',
          cyclingSkillLevel: '',
          cyclingHistory: '',
          runningSkillLevel: '',
          runningHistory: '',
          powerMeter: '',
          powerMeterDetails: '',
          heartRateMonitor: '',
          heartRateMonitorDetails: '',
          trainingEquipment: '',
          longestDistances: [],
          vo2MaxTest: '',
          twoGreatestStrengths: '',
          twoBiggestLimiters: '',
          biggestChallenge: [],
          pastCurrentInjuries: '',
          injuryDetails: '',
          seePhysicalTherapist: '',
          chronicInjuriesConditions: '',
          chronicDetails: '',
          medicationsSupplements: '',
          medicationsList: '',
          typicalDayEating: '',
          dailyWaterIntake: '',
          exerciseHydration: '',
          foodAllergiesRestrictions: '',
          whatWantFromCoaching: '',
          whatMotivatesAthlete: '',
          biggestTechnicalPhysicalChallenges: '',
          handlePressureRaces: '',
          proudAccomplishments: '',
          interestedCoach: [],
          needCallHeadCoach: '',
          anythingElse: ''
        });
        
        // Reset to first section
        setCurrentSection(1);
      } else {
        setSubmitStatus('error');
        // Show error popup
        setModalMessage(getTranslation('subscription.errorMessage', language));
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      // Show error popup
      setModalMessage(getTranslation('subscription.errorMessage', language));
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const seoConfig = getSEOConfig('subscription', language);

  return (
    <div className={`main-content ${isRTL ? 'rtl' : 'ltr'}`}>
      <SEO {...seoConfig} />
      <section className="hero subscription-hero">
        <div className="hero-background">
          <img 
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1758128388/00_4_lxpotu.png" 
            alt="Join Our Team - Podium Racing Middle East" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="coaches-showcase">
            <h1 className="hero-title">{getTranslation('subscription.heroTitle', language)}</h1>
            <div className="coaches-grid">
              <div className="coach-card">
                <div className="coach-image-container">
                  <img 
                    src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1758129767/IMG_6650_1_zeimch.jpg" 
                    alt="Coach Saif Al-Islam"
                    className="coach-image offset-saif no-white"
                  />
                </div>
                <div className="coach-info">
                  <h3 className="coach-name">{getTranslation('coaches.coaches.saif.name', language)}</h3>
                </div>
              </div>
              
              <div className="coach-card">
                <div className="coach-image-container">
                  <img 
                    src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756988645/Screenshot_2025-09-04_152330_p96vpw.png" 
                    alt="Coach Seifeldeen Ismail"
                    className="coach-image"
                  />
                </div>
                <div className="coach-info">
                  <h3 className="coach-name">{getTranslation('coaches.coaches.seifeldeen.name', language)}</h3>
                </div>
              </div>
              
              <div className="coach-card">
                <div className="coach-image-container">
                  <img 
                    src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756988645/Screenshot_2025-09-04_152258_qepspb.png" 
                    alt="Coach Taher Hisham"
                    className="coach-image"
                  />
                </div>
                <div className="coach-info">
                  <h3 className="coach-name">{getTranslation('coaches.coaches.taher.name', language)}</h3>
                </div>
              </div>
              
              <div className="coach-card">
                <div className="coach-image-container">
                  <img 
                    src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1765964719/Screenshot_2025-12-17_124029_n8mb0j.png" 
                    alt="Coach Rehab Hamdy"
                    className="coach-image offset-down no-white"
                  />
                </div>
                <div className="coach-info">
                  <h3 className="coach-name">{getTranslation('coaches.coaches.rehab.name', language)}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section subscription-content">
        <div className="container">
          <div className="subscription-form-section">
            <h2 
              style={{
                color: '#000000',
                backgroundColor: 'transparent',
                textShadow: 'none',
                border: 'none',
                padding: '0',
                margin: '0 0 2rem 0',
                fontSize: '2rem',
                fontWeight: '600',
                textAlign: 'center',
                fontFamily: 'Arial, sans-serif'
              }}
            >
              {getTranslation('subscription.formTitle', language)}
            </h2>
            
            {/* Progress Indicator */}
            <div className="progress-indicator">
              {Array.from({ length: totalSections }, (_, index) => (
                <div
                  key={index + 1}
                  className={`progress-step ${currentSection === index + 1 ? 'active' : ''} ${currentSection > index + 1 ? 'completed' : ''}`}
                  onClick={() => goToSection(index + 1)}
                >
                  <span className="step-number">{index + 1}</span>
                  <span className="step-label">
                    {index + 1 === 1 ? getTranslation('subscription.personalInfoTitle', language) : 
                     index + 1 === 2 ? getTranslation('subscription.athleticGoalsTitle', language) : 
                     index + 1 === 3 ? getTranslation('subscription.trainingLifestyleTitle', language) :
                     index + 1 === 4 ? getTranslation('subscription.currentSkillExperienceTitle', language) :
                     index + 1 === 5 ? getTranslation('subscription.trainingEquipmentTitle', language) :
                     index + 1 === 6 ? getTranslation('subscription.performancePastRacesTitle', language) :
                     index + 1 === 7 ? getTranslation('subscription.challengesLimitersTitle', language) :
                     index + 1 === 8 ? getTranslation('subscription.medicalInjuryHistoryTitle', language) :
                     index + 1 === 9 ? getTranslation('subscription.nutritionRecoveryTitle', language) :
                     index + 1 === 10 ? getTranslation('subscription.finalNotesExpectationsTitle', language) :
                     `Section ${index + 1}`}
                  </span>
                </div>
              ))}
            </div>

            <form 
              className="subscription-form" 
              onSubmit={handleSubmit}
              action="https://formsubmit.co/q9g8moh@gmail.com"
              method="POST"
            >
              
              {/* Section 1: Personal & Contact Information */}
              {currentSection === 1 && (
                <div className="form-section">
                  <h3 className="section-title">{getTranslation('subscription.personalInfoTitle', language)}</h3>
                  
                  <div className="form-group">
                    <label htmlFor="fullName" className={isFieldRequiredAndEmpty('fullName') ? 'required-empty' : ''}>{getTranslation('subscription.fullName', language)}</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="dateOfBirth" className={isFieldRequiredAndEmpty('dateOfBirth') ? 'required-empty' : ''}>{getTranslation('subscription.dateOfBirth', language)}</label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                    />
                    {ageDisplay && (
                      <div style={{ 
                        color: '#27ae60', 
                        fontSize: '0.9rem', 
                        marginTop: '0.5rem',
                        fontWeight: '500'
                      }}>
                        {ageDisplay}
                      </div>
                    )}
                    {validationErrors.dateOfBirth && (
                      <div style={{ 
                        color: '#e74c3c', 
                        fontSize: '0.9rem', 
                        marginTop: '0.5rem'
                      }}>
                        {validationErrors.dateOfBirth}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="height" className={isFieldRequiredAndEmpty('height') ? 'required-empty' : ''}>{getTranslation('subscription.height', language)}</label>
                    <input
                      type="number"
                      id="height"
                      name="height"
                      value={formData.height}
                      onChange={handleInputChange}
                      placeholder="cm"
                      min="1"
                      step="0.1"
                      required
                    />
                    {validationErrors.height && (
                      <div style={{ 
                        color: '#e74c3c', 
                        fontSize: '0.9rem', 
                        marginTop: '0.5rem'
                      }}>
                        {validationErrors.height}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="weight" className={isFieldRequiredAndEmpty('weight') ? 'required-empty' : ''}>{getTranslation('subscription.weight', language)}</label>
                    <input
                      type="number"
                      id="weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      placeholder="kg"
                      min="1"
                      step="0.1"
                      required
                    />
                    {validationErrors.weight && (
                      <div style={{ 
                        color: '#e74c3c', 
                        fontSize: '0.9rem', 
                        marginTop: '0.5rem'
                      }}>
                        {validationErrors.weight}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="idealWeight" className={isFieldRequiredAndEmpty('idealWeight') ? 'required-empty' : ''}>{getTranslation('subscription.idealWeight', language)}</label>
                    <input
                      type="number"
                      id="idealWeight"
                      name="idealWeight"
                      value={formData.idealWeight}
                      onChange={handleInputChange}
                      placeholder="kg"
                      min="1"
                      step="0.1"
                      required
                    />
                    {validationErrors.idealWeight && (
                      <div style={{ 
                        color: '#e74c3c', 
                        fontSize: '0.9rem', 
                        marginTop: '0.5rem'
                      }}>
                        {validationErrors.idealWeight}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phoneNumber" className={isFieldRequiredAndEmpty('phoneNumber') ? 'required-empty' : ''}>{getTranslation('subscription.phoneNumber', language)}</label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <div ref={phoneCountryDropdownRef} style={{ position: 'relative', flex: '0 0 auto' }}>
                        <input
                          type="text"
                          placeholder="Search country..."
                          value={phoneCountrySearchTerm}
                          onChange={(e) => {
                            setPhoneCountrySearchTerm(e.target.value);
                            setShowPhoneCountryDropdown(true);
                          }}
                          onFocus={() => setShowPhoneCountryDropdown(true)}
                          style={{
                            width: '200px',
                            padding: '0.75rem',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '1rem'
                          }}
                        />
                        {showPhoneCountryDropdown && (
                          <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            backgroundColor: 'white',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            maxHeight: '200px',
                            overflowY: 'auto',
                            zIndex: 1000,
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                          }}>
                            {getFilteredCountries(phoneCountrySearchTerm).map((country, index) => (
                              <div
                                key={index}
                                onClick={() => handlePhoneCountrySelect(country)}
                                style={{
                                  padding: '0.5rem',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.5rem',
                                  borderBottom: '1px solid #eee',
                                  color: '#000000'
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.backgroundColor = '#f5f5f5';
                                  e.target.style.color = '#000000';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.backgroundColor = 'white';
                                  e.target.style.color = '#000000';
                                }}
                              >
                                <span style={{ color: '#000000' }}>{country.flag}</span>
                                <span style={{ color: '#000000', fontWeight: '500' }}>{country.name}</span>
                                <span style={{ marginLeft: 'auto', color: '#000000', fontWeight: '500' }}>{country.phone}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678"
                        required
                        style={{ flex: 1 }}
                      />
                    </div>
                    {selectedPhoneCountry && (
                      <div style={{ 
                        color: '#27ae60', 
                        fontSize: '0.9rem', 
                        marginTop: '0.5rem',
                        fontWeight: '500'
                      }}>
                        {getTranslation('subscription.selected', language)} {selectedPhoneCountry.flag} {selectedPhoneCountry.name} ({selectedPhoneCountry.phone})
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="emailAddress" className={isFieldRequiredAndEmpty('emailAddress') ? 'required-empty' : ''}>{getTranslation('subscription.emailAddress', language)}</label>
                    <input
                      type="email"
                      id="emailAddress"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      required
                    />
                    {validationErrors.emailAddress && (
                      <div style={{ 
                        color: '#e74c3c', 
                        fontSize: '0.9rem', 
                        marginTop: '0.5rem'
                      }}>
                        {validationErrors.emailAddress}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="cityCountry" className={`city-country-label ${isFieldRequiredAndEmpty('cityCountry') ? 'required-empty' : ''}`} style={{
                      color: '#2c3e50 !important',
                      fontWeight: '600 !important',
                      fontSize: '1rem !important',
                      display: 'block !important',
                      marginBottom: '0.5rem !important',
                      lineHeight: '1.4 !important',
                      textShadow: 'none !important',
                      backgroundColor: 'transparent !important'
                    }}>
                      {getTranslation('subscription.cityCountry', language)}
                    </label>
                    <div ref={countryDropdownRef} style={{ position: 'relative' }}>
                      <input
                        type="text"
                        id="cityCountry"
                        name="cityCountry"
                        value={countrySearchTerm}
                        onChange={(e) => {
                          setCountrySearchTerm(e.target.value);
                          setShowCountryDropdown(true);
                        }}
                        onFocus={() => setShowCountryDropdown(true)}
                        placeholder="Search country..."
                        required
                        style={{ width: '100%' }}
                      />
                        {showCountryDropdown && (
                          <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            backgroundColor: 'white',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            maxHeight: '200px',
                            overflowY: 'auto',
                            zIndex: 1000,
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                          }}>
                            {getFilteredCountries(countrySearchTerm).map((country, index) => (
                              <div
                                key={index}
                                onClick={() => handleCountrySelect(country)}
                                style={{
                                  padding: '0.5rem',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.5rem',
                                  borderBottom: '1px solid #eee',
                                  color: '#000000'
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.backgroundColor = '#f5f5f5';
                                  e.target.style.color = '#000000';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.backgroundColor = 'white';
                                  e.target.style.color = '#000000';
                                }}
                              >
                                <span style={{ color: '#000000' }}>{country.flag}</span>
                                <span style={{ color: '#000000', fontWeight: '500' }}>{country.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                    </div>
                    {selectedCountry && (
                      <div style={{ 
                        color: '#27ae60', 
                        fontSize: '0.9rem', 
                        marginTop: '0.5rem',
                        fontWeight: '500'
                      }}>
                        {getTranslation('subscription.selected', language)} {selectedCountry.flag} {selectedCountry.name}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="maritalStatus" className={isFieldRequiredAndEmpty('maritalStatus') ? 'required-empty' : ''}>{getTranslation('subscription.maritalStatus', language)}</label>
                    <select
                      id="maritalStatus"
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{getTranslation('subscription.maritalStatus', language)}</option>
                      <option value="single">{getTranslation('subscription.single', language)}</option>
                      <option value="married">{getTranslation('subscription.married', language)}</option>
                      <option value="divorced">{getTranslation('subscription.divorced', language)}</option>
                      <option value="widowed">{getTranslation('subscription.widowed', language)}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="haveChildren" className={isFieldRequiredAndEmpty('haveChildren') ? 'required-empty' : ''}>{getTranslation('subscription.haveChildren', language)}</label>
                    <select
                      id="haveChildren"
                      name="haveChildren"
                      value={formData.haveChildren}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{getTranslation('subscription.haveChildren', language)}</option>
                      <option value="yes">{getTranslation('subscription.yes', language)}</option>
                      <option value="no">{getTranslation('subscription.no', language)}</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Section 2: Athletic Goals */}
              {currentSection === 2 && (
                <div className="form-section">
                  <h3 className="section-title">{getTranslation('subscription.athleticGoalsTitle', language)}</h3>
                  
                  <div className="form-group">
                    <label htmlFor="ultimateGoal" className={isFieldRequiredAndEmpty('ultimateGoal') ? 'required-empty' : ''}>{getTranslation('subscription.ultimateGoal', language)}</label>
                    <textarea
                      id="ultimateGoal"
                      name="ultimateGoal"
                      value={formData.ultimateGoal}
                      onChange={handleInputChange}
                      required
                      rows="3"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="top3Goals" className={isFieldRequiredAndEmpty('top3Goals') ? 'required-empty' : ''}>{getTranslation('subscription.top3Goals', language)}</label>
                    <textarea
                      id="top3Goals"
                      name="top3Goals"
                      value={formData.top3Goals}
                      onChange={handleInputChange}
                      required
                      rows="3"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastSeasonGoal" className={isFieldRequiredAndEmpty('lastSeasonGoal') ? 'required-empty' : ''}>{getTranslation('subscription.lastSeasonGoal', language)}</label>
                    <textarea
                      id="lastSeasonGoal"
                      name="lastSeasonGoal"
                      value={formData.lastSeasonGoal}
                      onChange={handleInputChange}
                      required
                      rows="3"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="importanceScale" className={isFieldRequiredAndEmpty('importanceScale') ? 'required-empty' : ''}>{getTranslation('subscription.importanceScale', language)}</label>
                    <select
                      id="importanceScale"
                      name="importanceScale"
                      value={formData.importanceScale}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{getTranslation('subscription.importanceScale', language)}</option>
                      <option value="1">1 - {getTranslation('subscription.notImportant', language)}</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5 - {getTranslation('subscription.moderatelyImportant', language)}</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10 - Extremely Important</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="whatToGain" className={isFieldRequiredAndEmpty('whatToGain') ? 'required-empty' : ''}>{getTranslation('subscription.whatToGain', language)}</label>
                    <textarea
                      id="whatToGain"
                      name="whatToGain"
                      value={formData.whatToGain}
                      onChange={handleInputChange}
                      required
                      rows="3"
                    />
                  </div>
                </div>
              )}

              {/* Section 3: Training Availability & Lifestyle */}
              {currentSection === 3 && (
                <div className="form-section">
                  <h3 className="section-title">{getTranslation('subscription.trainingLifestyleTitle', language)}</h3>
                  
                  <div className="form-group">
                    <label className={isFieldRequiredAndEmpty('whatLimiting') ? 'required-empty' : ''}>{getTranslation('subscription.whatLimiting', language)}</label>
                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="whatLimiting"
                          value="workTime"
                          checked={formData.whatLimiting.includes('workTime')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.workTime', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="whatLimiting"
                          value="familyCommitments"
                          checked={formData.whatLimiting.includes('familyCommitments')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.familyCommitments', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="whatLimiting"
                          value="travelTime"
                          checked={formData.whatLimiting.includes('travelTime')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.travelTime', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="whatLimiting"
                          value="motivation"
                          checked={formData.whatLimiting.includes('motivation')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.motivation', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="whatLimiting"
                          value="injury"
                          checked={formData.whatLimiting.includes('injury')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.injury', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="whatLimiting"
                          value="financialLimitations"
                          checked={formData.whatLimiting.includes('financialLimitations')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.financialLimitations', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="whatLimiting"
                          value="lackOfKnowledge"
                          checked={formData.whatLimiting.includes('lackOfKnowledge')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.lackOfKnowledge', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="whatLimiting"
                          value="other"
                          checked={formData.whatLimiting.includes('other')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.other', language)}
                      </label>
                    </div>
                  </div>

                  {formData.whatLimiting.includes('other') && (
                    <div className="form-group">
                      <label htmlFor="otherSpecify" className={isFieldRequiredAndEmpty('otherSpecify') ? 'required-empty' : ''}>{getTranslation('subscription.otherSpecify', language)}</label>
                      <input
                        type="text"
                        id="otherSpecify"
                        name="otherSpecify"
                        value={formData.otherSpecify}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="workStudyHours" className={isFieldRequiredAndEmpty('workStudyHours') ? 'required-empty' : ''}>{getTranslation('subscription.workStudyHours', language)}</label>
                    <input
                      type="number"
                      id="workStudyHours"
                      name="workStudyHours"
                      value={formData.workStudyHours}
                      onChange={handleInputChange}
                      placeholder="40"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="workStressLevel" className={isFieldRequiredAndEmpty('workStressLevel') ? 'required-empty' : ''}>{getTranslation('subscription.workStressLevel', language)}</label>
                    <select
                      id="workStressLevel"
                      name="workStressLevel"
                      value={formData.workStressLevel}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{getTranslation('subscription.workStressLevel', language)}</option>
                      <option value="1">1 - {getTranslation('subscription.low', language)}</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5 - {getTranslation('subscription.moderate', language)}</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10 - {getTranslation('subscription.veryHigh', language)}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className={isFieldRequiredAndEmpty('availableTrainingSlots') ? 'required-empty' : ''}>{getTranslation('subscription.availableTrainingSlots', language)}</label>
                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="availableTrainingSlots"
                          value="monday"
                          checked={formData.availableTrainingSlots.includes('monday')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.monday', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="availableTrainingSlots"
                          value="tuesday"
                          checked={formData.availableTrainingSlots.includes('tuesday')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.tuesday', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="availableTrainingSlots"
                          value="wednesday"
                          checked={formData.availableTrainingSlots.includes('wednesday')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.wednesday', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="availableTrainingSlots"
                          value="thursday"
                          checked={formData.availableTrainingSlots.includes('thursday')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.thursday', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="availableTrainingSlots"
                          value="friday"
                          checked={formData.availableTrainingSlots.includes('friday')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.friday', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="availableTrainingSlots"
                          value="saturday"
                          checked={formData.availableTrainingSlots.includes('saturday')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.saturday', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="availableTrainingSlots"
                          value="sunday"
                          checked={formData.availableTrainingSlots.includes('sunday')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.sunday', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="availableTrainingSlots"
                          value="fullFlexibility"
                          checked={formData.availableTrainingSlots.includes('fullFlexibility')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.fullFlexibility', language)}
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="sleepSchedule" className={isFieldRequiredAndEmpty('sleepSchedule') ? 'required-empty' : ''}>{getTranslation('subscription.sleepSchedule', language)}</label>
                    <input
                      type="text"
                      id="sleepSchedule"
                      name="sleepSchedule"
                      value={formData.sleepSchedule}
                      onChange={handleInputChange}
                      placeholder="e.g., 11:00 PM - 6:00 AM"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Section 4: Current Skill & Experience */}
              {currentSection === 4 && (
                <div className="form-section">
                  <h3 className="section-title">{getTranslation('subscription.currentSkillExperienceTitle', language)}</h3>
                  
                  <div className="form-group">
                    <label htmlFor="overallSkillLevel" className={isFieldRequiredAndEmpty('overallSkillLevel') ? 'required-empty' : ''}>{getTranslation('subscription.overallSkillLevel', language)}</label>
                    <select
                      id="overallSkillLevel"
                      name="overallSkillLevel"
                      value={formData.overallSkillLevel}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{getTranslation('subscription.overallSkillLevel', language)}</option>
                      <option value="1">1 - {getTranslation('subscription.beginner', language)}</option>
                      <option value="2">2</option>
                      <option value="3">3 - {getTranslation('subscription.intermediate', language)}</option>
                      <option value="4">4</option>
                      <option value="5">5 - {getTranslation('subscription.expert', language)}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="swimmingSkillLevel" className={isFieldRequiredAndEmpty('swimmingSkillLevel') ? 'required-empty' : ''}>{getTranslation('subscription.swimmingSkillLevel', language)}</label>
                    <select
                      id="swimmingSkillLevel"
                      name="swimmingSkillLevel"
                      value={formData.swimmingSkillLevel}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{getTranslation('subscription.swimmingSkillLevel', language)}</option>
                      <option value="1">1 - {getTranslation('subscription.beginner', language)}</option>
                      <option value="2">2</option>
                      <option value="3">3 - {getTranslation('subscription.intermediate', language)}</option>
                      <option value="4">4</option>
                      <option value="5">5 - {getTranslation('subscription.expert', language)}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="swimmingHistory" className={isFieldRequiredAndEmpty('swimmingHistory') ? 'required-empty' : ''}>{getTranslation('subscription.swimmingHistory', language)}</label>
                    <textarea
                      id="swimmingHistory"
                      name="swimmingHistory"
                      value={formData.swimmingHistory}
                      onChange={handleInputChange}
                      required
                      rows="3"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cyclingSkillLevel" className={isFieldRequiredAndEmpty('cyclingSkillLevel') ? 'required-empty' : ''}>{getTranslation('subscription.cyclingSkillLevel', language)}</label>
                    <select
                      id="cyclingSkillLevel"
                      name="cyclingSkillLevel"
                      value={formData.cyclingSkillLevel}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{getTranslation('subscription.cyclingSkillLevel', language)}</option>
                      <option value="1">1 - {getTranslation('subscription.beginner', language)}</option>
                      <option value="2">2</option>
                      <option value="3">3 - {getTranslation('subscription.intermediate', language)}</option>
                      <option value="4">4</option>
                      <option value="5">5 - {getTranslation('subscription.expert', language)}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="cyclingHistory" className={isFieldRequiredAndEmpty('cyclingHistory') ? 'required-empty' : ''}>{getTranslation('subscription.cyclingHistory', language)}</label>
                    <textarea
                      id="cyclingHistory"
                      name="cyclingHistory"
                      value={formData.cyclingHistory}
                      onChange={handleInputChange}
                      required
                      rows="3"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="runningSkillLevel" className={isFieldRequiredAndEmpty('runningSkillLevel') ? 'required-empty' : ''}>{getTranslation('subscription.runningSkillLevel', language)}</label>
                    <select
                      id="runningSkillLevel"
                      name="runningSkillLevel"
                      value={formData.runningSkillLevel}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{getTranslation('subscription.runningSkillLevel', language)}</option>
                      <option value="1">1 - {getTranslation('subscription.beginner', language)}</option>
                      <option value="2">2</option>
                      <option value="3">3 - {getTranslation('subscription.intermediate', language)}</option>
                      <option value="4">4</option>
                      <option value="5">5 - {getTranslation('subscription.expert', language)}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="runningHistory" className={isFieldRequiredAndEmpty('runningHistory') ? 'required-empty' : ''}>{getTranslation('subscription.runningHistory', language)}</label>
                    <textarea
                      id="runningHistory"
                      name="runningHistory"
                      value={formData.runningHistory}
                      onChange={handleInputChange}
                      required
                      rows="3"
                    />
                  </div>
                </div>
              )}

              {/* Section 5: Training Equipment & Technology */}
              {currentSection === 5 && (
                <div className="form-section">
                  <h3 className="section-title">{getTranslation('subscription.trainingEquipmentTitle', language)}</h3>
                  
                  <div className="form-group">
                    <label htmlFor="powerMeter" className={isFieldRequiredAndEmpty('powerMeter') ? 'required-empty' : ''}>{getTranslation('subscription.powerMeter', language)}</label>
                    <select
                      id="powerMeter"
                      name="powerMeter"
                      value={formData.powerMeter}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{getTranslation('subscription.powerMeter', language)}</option>
                      <option value="yes">{getTranslation('subscription.yes', language)}</option>
                      <option value="no">{getTranslation('subscription.no', language)}</option>
                    </select>
                  </div>

                  {formData.powerMeter === 'yes' && (
                    <div className="form-group">
                      <label htmlFor="powerMeterDetails">{getTranslation('subscription.powerMeterYes', language)}</label>
                      <textarea
                        id="powerMeterDetails"
                        name="powerMeterDetails"
                        value={formData.powerMeterDetails}
                        onChange={handleInputChange}
                        required
                        rows="3"
                        placeholder="e.g., Steady: 200W, Moderate: 250W, Hard: 300W"
                      />
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="heartRateMonitor" className={isFieldRequiredAndEmpty('heartRateMonitor') ? 'required-empty' : ''}>{getTranslation('subscription.heartRateMonitor', language)}</label>
                    <select
                      id="heartRateMonitor"
                      name="heartRateMonitor"
                      value={formData.heartRateMonitor}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{getTranslation('subscription.heartRateMonitor', language)}</option>
                      <option value="yes">{getTranslation('subscription.yes', language)}</option>
                      <option value="no">{getTranslation('subscription.no', language)}</option>
                    </select>
                  </div>

                  {formData.heartRateMonitor === 'yes' && (
                    <div className="form-group">
                      <label htmlFor="heartRateMonitorDetails">{getTranslation('subscription.heartRateMonitorYes', language)}</label>
                      <textarea
                        id="heartRateMonitorDetails"
                        name="heartRateMonitorDetails"
                        value={formData.heartRateMonitorDetails}
                        onChange={handleInputChange}
                        required
                        rows="3"
                        placeholder="e.g., Steady: 140 bpm, Moderate: 160 bpm, Hard: 180 bpm"
                      />
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="trainingEquipment" className={isFieldRequiredAndEmpty('trainingEquipment') ? 'required-empty' : ''}>{getTranslation('subscription.trainingEquipment', language)}</label>
                    <textarea
                      id="trainingEquipment"
                      name="trainingEquipment"
                      value={formData.trainingEquipment}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      placeholder="e.g., Road bike, running shoes, swimming goggles, etc."
                    />
                  </div>
                </div>
              )}

              {/* Section 6: Performance & Past Races */}
              {currentSection === 6 && (
                <div className="form-section">
                  <h3 className="section-title">{getTranslation('subscription.performancePastRacesTitle', language)}</h3>
                  
                  <div className="form-group">
                    <label className={isFieldRequiredAndEmpty('longestDistances') ? 'required-empty' : ''}>{getTranslation('subscription.longestDistances', language)}</label>
                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="longestDistances"
                          value="run5K"
                          checked={formData.longestDistances.includes('run5K')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.run5K', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="longestDistances"
                          value="run10K"
                          checked={formData.longestDistances.includes('run10K')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.run10K', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="longestDistances"
                          value="halfMarathon"
                          checked={formData.longestDistances.includes('halfMarathon')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.halfMarathon', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="longestDistances"
                          value="marathon"
                          checked={formData.longestDistances.includes('marathon')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.marathon', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="longestDistances"
                          value="swim100m"
                          checked={formData.longestDistances.includes('swim100m')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.swim100m', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="longestDistances"
                          value="swim200m"
                          checked={formData.longestDistances.includes('swim200m')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.swim200m', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="longestDistances"
                          value="swim400m"
                          checked={formData.longestDistances.includes('swim400m')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.swim400m', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="longestDistances"
                          value="swim1K"
                          checked={formData.longestDistances.includes('swim1K')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.swim1K', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="longestDistances"
                          value="sprintDistance"
                          checked={formData.longestDistances.includes('sprintDistance')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.sprintDistance', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="longestDistances"
                          value="olympicDistance"
                          checked={formData.longestDistances.includes('olympicDistance')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.olympicDistance', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="longestDistances"
                          value="halfIronman"
                          checked={formData.longestDistances.includes('halfIronman')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.halfIronman', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="longestDistances"
                          value="fullIronman"
                          checked={formData.longestDistances.includes('fullIronman')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.fullIronman', language)}
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="vo2MaxTest" className={isFieldRequiredAndEmpty('vo2MaxTest') ? 'required-empty' : ''}>{getTranslation('subscription.vo2MaxTest', language)}</label>
                    <textarea
                      id="vo2MaxTest"
                      name="vo2MaxTest"
                      value={formData.vo2MaxTest}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      placeholder="e.g., VO2 Max: 45 ml/kg/min, Lactate Threshold: 165 bpm, FTP: 250W"
                    />
                  </div>
                </div>
              )}

              {/* Section 7: Challenges & Limiters */}
              {currentSection === 7 && (
                <div className="form-section">
                  <h3 className="section-title">{getTranslation('subscription.challengesLimitersTitle', language)}</h3>
                  
                  <div className="form-group">
                    <label htmlFor="twoGreatestStrengths" className={isFieldRequiredAndEmpty('twoGreatestStrengths') ? 'required-empty' : ''}>{getTranslation('subscription.twoGreatestStrengths', language)}</label>
                    <textarea
                      id="twoGreatestStrengths"
                      name="twoGreatestStrengths"
                      value={formData.twoGreatestStrengths}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      placeholder="e.g., 1. Strong cycling power, 2. Mental toughness during long races"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="twoBiggestLimiters" className={isFieldRequiredAndEmpty('twoBiggestLimiters') ? 'required-empty' : ''}>{getTranslation('subscription.twoBiggestLimiters', language)}</label>
                    <textarea
                      id="twoBiggestLimiters"
                      name="twoBiggestLimiters"
                      value={formData.twoBiggestLimiters}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      placeholder="e.g., 1. Swim technique, 2. Running speed"
                    />
                  </div>

                  <div className="form-group">
                    <label className={isFieldRequiredAndEmpty('biggestChallenge') ? 'required-empty' : ''}>{getTranslation('subscription.biggestChallenge', language)}</label>
                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="biggestChallenge"
                          value="swimEndurance"
                          checked={formData.biggestChallenge.includes('swimEndurance')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.swimEndurance', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="biggestChallenge"
                          value="swimTechnique"
                          checked={formData.biggestChallenge.includes('swimTechnique')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.swimTechnique', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="biggestChallenge"
                          value="bikeEndurance"
                          checked={formData.biggestChallenge.includes('bikeEndurance')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.bikeEndurance', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="biggestChallenge"
                          value="bikePowerHills"
                          checked={formData.biggestChallenge.includes('bikePowerHills')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.bikePowerHills', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="biggestChallenge"
                          value="runEndurance"
                          checked={formData.biggestChallenge.includes('runEndurance')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.runEndurance', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="biggestChallenge"
                          value="runSpeed"
                          checked={formData.biggestChallenge.includes('runSpeed')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.runSpeed', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="biggestChallenge"
                          value="mentalToughness"
                          checked={formData.biggestChallenge.includes('mentalToughness')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.mentalToughness', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="biggestChallenge"
                          value="other"
                          checked={formData.biggestChallenge.includes('other')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.other', language)}
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Section 8: Medical & Injury History */}
              {currentSection === 8 && (
                <div className="form-section">
                  <h3 className="section-title">{getTranslation('subscription.medicalInjuryHistoryTitle', language)}</h3>
                  
                  <div className="form-group">
                    <label htmlFor="pastCurrentInjuries" className={isFieldRequiredAndEmpty('pastCurrentInjuries') ? 'required-empty' : ''}>{getTranslation('subscription.pastCurrentInjuries', language)}</label>
                    <select
                      id="pastCurrentInjuries"
                      name="pastCurrentInjuries"
                      value={formData.pastCurrentInjuries}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{getTranslation('subscription.pastCurrentInjuries', language)}</option>
                      <option value="yes">{getTranslation('subscription.yes', language)}</option>
                      <option value="no">{getTranslation('subscription.no', language)}</option>
                    </select>
                  </div>

                  {formData.pastCurrentInjuries === 'yes' && (
                    <div className="form-group">
                      <label htmlFor="injuryDetails">{getTranslation('subscription.injuryDetails', language)}</label>
                      <textarea
                        id="injuryDetails"
                        name="injuryDetails"
                        value={formData.injuryDetails}
                        onChange={handleInputChange}
                        required
                        rows="3"
                        placeholder="e.g., Knee injury in 2022, shoulder pain from swimming"
                      />
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="seePhysicalTherapist" className={isFieldRequiredAndEmpty('seePhysicalTherapist') ? 'required-empty' : ''}>{getTranslation('subscription.seePhysicalTherapist', language)}</label>
                    <select
                      id="seePhysicalTherapist"
                      name="seePhysicalTherapist"
                      value={formData.seePhysicalTherapist}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{getTranslation('subscription.seePhysicalTherapist', language)}</option>
                      <option value="yes">{getTranslation('subscription.yes', language)}</option>
                      <option value="no">{getTranslation('subscription.no', language)}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="chronicInjuriesConditions" className={isFieldRequiredAndEmpty('chronicInjuriesConditions') ? 'required-empty' : ''}>{getTranslation('subscription.chronicInjuriesConditions', language)}</label>
                    <select
                      id="chronicInjuriesConditions"
                      name="chronicInjuriesConditions"
                      value={formData.chronicInjuriesConditions}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{getTranslation('subscription.chronicInjuriesConditions', language)}</option>
                      <option value="yes">{getTranslation('subscription.yes', language)}</option>
                      <option value="no">{getTranslation('subscription.no', language)}</option>
                    </select>
                  </div>

                  {formData.chronicInjuriesConditions === 'yes' && (
                    <div className="form-group">
                      <label htmlFor="chronicDetails">{getTranslation('subscription.chronicDetails', language)}</label>
                      <textarea
                        id="chronicDetails"
                        name="chronicDetails"
                        value={formData.chronicDetails}
                        onChange={handleInputChange}
                        required
                        rows="3"
                        placeholder="e.g., Asthma, diabetes, chronic back pain"
                      />
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="medicationsSupplements" className={isFieldRequiredAndEmpty('medicationsSupplements') ? 'required-empty' : ''}>{getTranslation('subscription.medicationsSupplements', language)}</label>
                    <select
                      id="medicationsSupplements"
                      name="medicationsSupplements"
                      value={formData.medicationsSupplements}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{getTranslation('subscription.medicationsSupplements', language)}</option>
                      <option value="yes">{getTranslation('subscription.yes', language)}</option>
                      <option value="no">{getTranslation('subscription.no', language)}</option>
                    </select>
                  </div>

                  {formData.medicationsSupplements === 'yes' && (
                    <div className="form-group">
                      <label htmlFor="medicationsList">{getTranslation('subscription.medicationsList', language)}</label>
                      <textarea
                        id="medicationsList"
                        name="medicationsList"
                        value={formData.medicationsList}
                        onChange={handleInputChange}
                        required
                        rows="3"
                        placeholder="e.g., Vitamin D, Omega-3, Iron supplements, Blood pressure medication"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Section 9: Nutrition & Recovery Habits */}
              {currentSection === 9 && (
                <div className="form-section">
                  <h3 className="section-title">{getTranslation('subscription.nutritionRecoveryTitle', language)}</h3>
                  
                  <div className="form-group">
                    <label htmlFor="typicalDayEating" className={isFieldRequiredAndEmpty('typicalDayEating') ? 'required-empty' : ''}>{getTranslation('subscription.typicalDayEating', language)}</label>
                    <textarea
                      id="typicalDayEating"
                      name="typicalDayEating"
                      value={formData.typicalDayEating}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      placeholder="e.g., Breakfast: Oatmeal with fruits, Lunch: Grilled chicken salad, Dinner: Salmon with vegetables, Snacks: Nuts and yogurt"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="dailyWaterIntake" className={isFieldRequiredAndEmpty('dailyWaterIntake') ? 'required-empty' : ''}>{getTranslation('subscription.dailyWaterIntake', language)}</label>
                    <input
                      type="text"
                      id="dailyWaterIntake"
                      name="dailyWaterIntake"
                      value={formData.dailyWaterIntake}
                      onChange={handleInputChange}
                      placeholder="e.g., 2-3 liters, 8-10 glasses"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="exerciseHydration" className={isFieldRequiredAndEmpty('exerciseHydration') ? 'required-empty' : ''}>{getTranslation('subscription.exerciseHydration', language)}</label>
                    <input
                      type="text"
                      id="exerciseHydration"
                      name="exerciseHydration"
                      value={formData.exerciseHydration}
                      onChange={handleInputChange}
                      placeholder="e.g., 500ml per hour, 1 bottle per 30 minutes"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="foodAllergiesRestrictions" className={isFieldRequiredAndEmpty('foodAllergiesRestrictions') ? 'required-empty' : ''}>{getTranslation('subscription.foodAllergiesRestrictions', language)}</label>
                    <textarea
                      id="foodAllergiesRestrictions"
                      name="foodAllergiesRestrictions"
                      value={formData.foodAllergiesRestrictions}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      placeholder="e.g., Gluten-free, lactose intolerant, nut allergy, vegetarian, etc."
                    />
                  </div>
                </div>
              )}

              {/* Section 10: Final Notes & Expectations */}
              {currentSection === 10 && (
                <div className="form-section">
                  <h3 className="section-title">{getTranslation('subscription.finalNotesExpectationsTitle', language)}</h3>
                  
                  <div className="form-group">
                    <label htmlFor="whatWantFromCoaching" className={isFieldRequiredAndEmpty('whatWantFromCoaching') ? 'required-empty' : ''}>{getTranslation('subscription.whatWantFromCoaching', language)}</label>
                    <textarea
                      id="whatWantFromCoaching"
                      name="whatWantFromCoaching"
                      value={formData.whatWantFromCoaching}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      placeholder="e.g., Personalized training plans, technique improvement, race strategy guidance"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="whatMotivatesAthlete" className={isFieldRequiredAndEmpty('whatMotivatesAthlete') ? 'required-empty' : ''}>{getTranslation('subscription.whatMotivatesAthlete', language)}</label>
                    <textarea
                      id="whatMotivatesAthlete"
                      name="whatMotivatesAthlete"
                      value={formData.whatMotivatesAthlete}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      placeholder="e.g., Personal growth, competition, health, achieving goals"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="biggestTechnicalPhysicalChallenges" className={isFieldRequiredAndEmpty('biggestTechnicalPhysicalChallenges') ? 'required-empty' : ''}>{getTranslation('subscription.biggestTechnicalPhysicalChallenges', language)}</label>
                    <textarea
                      id="biggestTechnicalPhysicalChallenges"
                      name="biggestTechnicalPhysicalChallenges"
                      value={formData.biggestTechnicalPhysicalChallenges}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      placeholder="e.g., Swim technique, bike power, running endurance, mental toughness"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="handlePressureRaces" className={isFieldRequiredAndEmpty('handlePressureRaces') ? 'required-empty' : ''}>{getTranslation('subscription.handlePressureRaces', language)}</label>
                    <textarea
                      id="handlePressureRaces"
                      name="handlePressureRaces"
                      value={formData.handlePressureRaces}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      placeholder="e.g., Stay calm, focus on process, positive self-talk, breathing techniques"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="proudAccomplishments" className={isFieldRequiredAndEmpty('proudAccomplishments') ? 'required-empty' : ''}>{getTranslation('subscription.proudAccomplishments', language)}</label>
                    <textarea
                      id="proudAccomplishments"
                      name="proudAccomplishments"
                      value={formData.proudAccomplishments}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      placeholder="e.g., 1. Completed first marathon, 2. Improved swim time by 5 minutes, 3. Finished Ironman 70.3"
                    />
                  </div>

                  <div className="form-group">
                    <label className={isFieldRequiredAndEmpty('interestedCoach') ? 'required-empty' : ''}>{getTranslation('subscription.interestedCoach', language)}</label>
                    <a 
                      href="https://podiumracing-me.com/coaches" 
                      className="btn btn-outline"
                      style={{
                        display: 'inline-block',
                        marginBottom: '1rem',
                        textDecoration: 'none',
                        padding: '0.5rem 1rem',
                        border: '2px solid #3498db',
                        borderRadius: '5px',
                        color: '#3498db',
                        backgroundColor: 'transparent',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#3498db';
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#3498db';
                      }}
                    >
                      View Coaches Page
                    </a>
                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="interestedCoach"
                          value="coachSeifeldeen"
                          checked={formData.interestedCoach.includes('coachSeifeldeen')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.coachSeifeldeen', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="interestedCoach"
                          value="coachSaif"
                          checked={formData.interestedCoach.includes('coachSaif')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.coachSaif', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="interestedCoach"
                          value="coachTaher"
                          checked={formData.interestedCoach.includes('coachTaher')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.coachTaher', language)}
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="interestedCoach"
                          value="coachRehab"
                          checked={formData.interestedCoach.includes('coachRehab')}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {getTranslation('subscription.coachRehab', language)}
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="needCallHeadCoach" className={isFieldRequiredAndEmpty('needCallHeadCoach') ? 'required-empty' : ''}>{getTranslation('subscription.needCallHeadCoach', language)}</label>
                    <select
                      id="needCallHeadCoach"
                      name="needCallHeadCoach"
                      value={formData.needCallHeadCoach}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{getTranslation('subscription.needCallHeadCoach', language)}</option>
                      <option value="yesNeedCall">{getTranslation('subscription.yesNeedCall', language)}</option>
                      <option value="noReadyStart">{getTranslation('subscription.noReadyStart', language)}</option>
                      <option value="other">{getTranslation('subscription.other', language)}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="anythingElse">{getTranslation('subscription.anythingElse', language)}</label>
                    <textarea
                      id="anythingElse"
                      name="anythingElse"
                      value={formData.anythingElse}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Any additional information, questions, or special requests..."
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="form-navigation">
                {currentSection > 1 && (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={prevSection}
                  >
                    {getTranslation('subscription.previous', language)}
                  </button>
                )}
                
                {currentSection < totalSections ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={nextSection}
                  >
                    {getTranslation('subscription.next', language)}
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? getTranslation('subscription.submitting', language) : getTranslation('subscription.submit', language)}
                  </button>
                )}
              </div>

              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  {getTranslation('subscription.successMessage', language)}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  {getTranslation('subscription.errorMessage', language)}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {showModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
          onClick={() => setShowModal(false)}
        >
            <div 
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '10px',
                maxWidth: '400px',
                width: '90%',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                direction: isRTL ? 'rtl' : 'ltr'
              }}
              onClick={(e) => e.stopPropagation()}
            >
            <h3 style={{ 
              color: submitStatus === 'success' ? '#27ae60' : '#e74c3c', 
              marginBottom: '1rem',
              fontSize: '1.2rem'
            }}>
              {submitStatus === 'success' ? '✅' : '⚠️'} {submitStatus === 'success' ? '' : getTranslation('subscription.validationRequired', language)}
            </h3>
            <p style={{ 
              color: '#2c3e50', 
              marginBottom: '1.5rem',
              lineHeight: '1.5'
            }}>
              {modalMessage}
            </p>
            <button
              onClick={() => setShowModal(false)}
              style={{
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '5px',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
            >
{getTranslation('subscription.ok', language)}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Subscription;
