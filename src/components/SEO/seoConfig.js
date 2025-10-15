// import { getTranslation } from '../../translations/translations';

export const getSEOConfig = (page, language = 'en') => {
  const baseUrl = 'https://podiumracing-me.com';
  const defaultImage = 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1753552171/ChatGPT_Image_Jul_26_2025_08_41_01_PM_svtphh.png';

  const seoConfigs = {
    home: {
      en: {
        title: 'Podium Racing Middle East - Triathlon Coaching & Training',
        description: 'Join Podium Racing Middle East for world-class triathlon coaching. Expert coaches, personalized training programs, and a supportive community for swimmers, cyclists, and runners. Transform from beginner to elite athlete.',
        keywords: 'triathlon coaching, swimming coaching, cycling coaching, running coaching, Middle East triathlon, Ironman training, triathlon community, endurance sports, athletic performance, sports coaching, Podium Racing ME',
        url: `${baseUrl}/`,
        image: defaultImage
      },
      ar: {
        title: 'Podium Racing الشرق الأوسط - تدريب وسباق الترايثلون',
        description: 'انضم إلى Podium Racing الشرق الأوسط للحصول على تدريب ترايثلون عالمي المستوى. مدربون خبراء، برامج تدريب مخصصة، ومجتمع داعم للسباحين وراكبي الدراجات والعدائين.',
        keywords: 'تدريب الترايثلون, تدريب السباحة, تدريب ركوب الدراجات, تدريب الجري, ترايثلون الشرق الأوسط, تدريب Ironman, مجتمع الترايثلون, رياضات التحمل, الأداء الرياضي, تدريب رياضي',
        url: `${baseUrl}/`,
        image: defaultImage
      }
    },
    coaches: {
      en: {
        title: 'Expert Triathlon Coaches - Podium Racing Middle East',
        description: 'Meet our world-class triathlon coaching team. Professional coaches with championship experience, personalized training programs, and proven track records in swimming, cycling, and running.',
        keywords: 'triathlon coaches, swimming coaches, cycling coaches, running coaches, professional coaching, championship coaches, Ironman coaches, endurance training, athletic coaching, Middle East coaches',
        url: `${baseUrl}/coaches`,
        image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1758129767/IMG_6650_1_zeimch.jpg'
      },
      ar: {
        title: 'مدربو الترايثلون الخبراء - Podium Racing الشرق الأوسط',
        description: 'تعرف على فريق التدريب العالمي للترايثلون. مدربون محترفون بخبرة البطولة، برامج تدريب مخصصة، وسجلات مثبتة في السباحة وركوب الدراجات والجري.',
        keywords: 'مدربو الترايثلون, مدربو السباحة, مدربو ركوب الدراجات, مدربو الجري, التدريب المحترف, مدربو البطولة, مدربو Ironman, تدريب التحمل, التدريب الرياضي, مدربو الشرق الأوسط',
        url: `${baseUrl}/coaches`,
        image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1758129767/IMG_6650_1_zeimch.jpg'
      }
    },
    athletes: {
      en: {
        title: 'Elite Triathlon Athletes - Podium Racing Middle East',
        description: 'Discover our talented triathlon athletes who represent Podium Racing Middle East excellence. From beginners to elite competitors, see how our athletes achieve their goals.',
        keywords: 'triathlon athletes, elite athletes, championship athletes, Ironman athletes, endurance athletes, swimming athletes, cycling athletes, running athletes, Middle East athletes, competitive triathlon',
        url: `${baseUrl}/athletes`,
        image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1756988645/Screenshot_2025-09-04_152330_p96vpw.png'
      },
      ar: {
        title: 'رياضيو الترايثلون النخبة - Podium Racing الشرق الأوسط',
        description: 'اكتشف رياضيين الترايثلون الموهوبين الذين يمثلون تميز Podium Racing في الشرق الأوسط. من المبتدئين إلى المنافسين النخبة، شاهد كيف يحقق رياضيونا أهدافهم.',
        keywords: 'رياضيو الترايثلون, رياضيو النخبة, رياضيو البطولة, رياضيو Ironman, رياضيو التحمل, رياضيو السباحة, رياضيو ركوب الدراجات, رياضيو الجري, رياضيو الشرق الأوسط, ترايثلون تنافسي',
        url: `${baseUrl}/athletes`,
        image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1756988645/Screenshot_2025-09-04_152330_p96vpw.png'
      }
    },
    about: {
      en: {
        title: 'About Podium Racing Middle East - Our Story & Mission',
        description: 'Learn about Podium Racing Middle East, connecting athletes with expert coaches across the region. Discover our story, mission, and commitment to triathlon excellence.',
        keywords: 'about Podium Racing, triathlon organization, Middle East triathlon, sports organization, triathlon community, athletic development, sports coaching network, endurance sports',
        url: `${baseUrl}/about`,
        image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1758128388/00_4_lxpotu.png'
      },
      ar: {
        title: 'حول Podium Racing الشرق الأوسط - قصتنا ومهمتنا',
        description: 'تعرف على Podium Racing الشرق الأوسط، الذي يربط الرياضيين بالمدربين الخبراء في جميع أنحاء المنطقة. اكتشف قصتنا ومهمتنا والتزامنا بتميز الترايثلون.',
        keywords: 'حول Podium Racing, منظمة الترايثلون, ترايثلون الشرق الأوسط, منظمة رياضية, مجتمع الترايثلون, التطوير الرياضي, شبكة التدريب الرياضي, رياضات التحمل',
        url: `${baseUrl}/about`,
        image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1758128388/00_4_lxpotu.png'
      }
    },
    subscription: {
      en: {
        title: 'Join Podium Racing Middle East - Apply for Triathlon Coaching',
        description: 'Apply to join Podium Racing Middle East triathlon team. Choose your coach and submit your application for world-class triathlon coaching. Expert coaches, personalized training programs, and a supportive community.',
        keywords: 'join triathlon team, triathlon application, triathlon coaching application, Middle East triathlon, triathlon membership, triathlon training application, join PRME, triathlon team application',
        url: `${baseUrl}/subscription`,
        image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1758129767/IMG_6650_1_zeimch.jpg'
      },
      ar: {
        title: 'انضم إلى Podium Racing الشرق الأوسط - قدم طلبك للتدريب',
        description: 'قدم طلبك للانضمام إلى فريق Podium Racing الشرق الأوسط للترايثلون. اختر مدربك وقدم طلبك للحصول على تدريب ترايثلون عالمي المستوى. مدربون خبراء، برامج تدريب مخصصة، ومجتمع داعم.',
        keywords: 'انضم لفريق الترايثلون, طلب الترايثلون, طلب تدريب الترايثلون, ترايثلون الشرق الأوسط, عضوية الترايثلون, طلب تدريب الترايثلون, انضم لـ PRME, طلب فريق الترايثلون',
        url: `${baseUrl}/subscription`,
        image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1758129767/IMG_6650_1_zeimch.jpg'
      }
    }
  };

  return seoConfigs[page]?.[language] || seoConfigs[page]?.en || seoConfigs.home.en;
};
