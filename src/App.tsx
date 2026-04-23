import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Scale, 
  Building2, 
  Users, 
  MapPin, 
  Phone, 
  Briefcase, 
  FileText, 
  Gavel, 
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { useState, useRef } from 'react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Αρχική', href: '#' },
    { name: 'Το Γραφείο μας', href: '#office' },
    { name: 'Υπηρεσίες για Επιχειρήσεις', href: '#business' },
    { name: 'Υπηρεσίες για Ιδιώτες', href: '#individuals' },
    { name: 'Χρήσιμα Νομικά Νέα', href: '#news' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <nav className="glass-header">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-lg shadow-xl shrink-0">
              <Scale className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-tight text-slate-900 leading-tight uppercase">ΚΑΤΣΟΥΡΑΣ</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">ΝΟΜΙΚΕΣ ΥΠΗΡΕΣΙΕΣ</span>
            </div>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Συνάντηση
            </motion.a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-6 py-8 flex flex-col space-y-6"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-900"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-slate-900 text-white px-6 py-4 rounded-xl text-center font-bold"
          >
            Συνάντηση
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={containerRef} className="relative h-[90vh] flex items-center overflow-hidden bg-slate-50">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-100 via-white to-slate-200 opacity-50" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            translateX: [0, 50, 0],
            translateY: [0, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-slate-300/30 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -30, 0],
            translateX: [0, -40, 0],
            translateY: [0, 20, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-slate-200/40 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2 mb-6"
          >
            <div className="h-[1px] w-8 bg-slate-400" />
            <span className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase">ΛΑΜΙΑ • ΦΘΙΩΤΙΔΑ</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.1] mb-8"
          >
            Κατσούρας <span className="italic font-normal text-slate-500">&</span> <br />
            Συνεργάτες
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl"
          >
            Ολοκληρωμένη Νομική Στρατηγική και Εκπροσώπηση στην Καρδιά της Φθιώτιδας. 
            Δυναμική υπεράσπιση των συμφερόντων σας με επαγγελματισμό και συνέπεια.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-slate-800 transition-all flex items-center justify-center group"
            >
              Επικοινωνήστε μαζί μας
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#expertise" 
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-slate-900 border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all flex items-center justify-center"
            >
              Υπηρεσίες Επιχειρήσεων
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute right-12 bottom-0 h-1/3 w-[1px] bg-slate-200 hidden lg:block" />
    </section>
  );
};

const ExpertiseSection = () => {
  const services = [
    {
      title: "Εταιρικό & Εμπορικό Δίκαιο",
      desc: "Σύσταση εταιρειών, σύνταξη συμβάσεων, διαχείριση εμπορικών διαφορών και στρατηγική υποστήριξη.",
      icon: Building2,
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      span: "md:col-span-2 md:row-span-2",
      tags: ["Εταιρείες", "Συμβάσεις", "Διακανονισμοί"]
    },
    {
      title: "Αστικό Δίκαιο",
      desc: "Ολοκληρωμένη διαχείριση υποθέσεων εμπραγμάτου, ενοχικού και κληρονομικού δικαίου.",
      icon: Gavel,
      color: "bg-slate-50",
      iconColor: "text-slate-700",
      span: "md:col-span-2 md:row-span-1",
      tags: ["Ακίνητα", "Κληρονομικά", "Αποζημιώσεις"]
    },
    {
      title: "Φορολογικό Δίκαιο",
      desc: "Εξειδικευμένη καθοδήγηση και εκπροσώπηση σε φορολογικά ζητήματα και προσφυγές.",
      icon: FileText,
      color: "bg-stone-50",
      iconColor: "text-stone-600",
      span: "md:col-span-1 md:row-span-1",
      tags: ["Φορολογία", "Προσφυγές"]
    },
    {
      title: "Οικογενειακό Δίκαιο",
      desc: "Ευαίσθητη προσέγγιση σε θέματα διαζυγίων, επιμέλειας και οικογενειακών διαφορών.",
      icon: Users,
      color: "bg-slate-100",
      iconColor: "text-slate-800",
      span: "md:col-span-1 md:row-span-1",
      tags: ["Διαζύγια", "Επιμέλεια"]
    },
    {
      title: "Εργατικό Δίκαιο",
      desc: "Προστασία δικαιωμάτων εργαζομένων και εργοδοτών σε σύνθετα εργασιακά περιβάλλοντα.",
      icon: Briefcase,
      color: "bg-slate-50",
      iconColor: "text-slate-900",
      span: "md:col-span-2 md:row-span-1",
      tags: ["Εργασιακά", "Απολύσεις", "Συμβάσεις"]
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase block mb-4"
          >
            ΤΟΜΕΙΣ ΕΞΕΙΔΙΚΕΥΣΗΣ
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold text-slate-900"
          >
            Ολοκληρωμένες Νομικές Υπηρεσίες
          </motion.h2>
        </div>

        <div className="bento-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`bento-item group ${s.color} ${s.span} flex flex-col justify-between`}
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl ${s.iconColor} bg-white flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-sm">{s.desc}</p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-2">
                {s.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm">
                  <ChevronRight className="w-5 h-5 text-slate-900" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnershipSection = () => {
  return (
    <section id="office" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800 skew-x-12 translate-x-24 opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase block mb-6">Η ΦΙΛΟΣΟΦΙΑ ΜΑΣ</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Η Ισχύς εν τη Ενώσει:<br />
              <span className="text-slate-400 font-normal italic">Το Concept της Συνεργασίας</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Στο γραφείο μας, η έννοια της "Ομάδας" δεν είναι απλά ένας τίτλος. Είναι ο πυρήνας της στρατηγικής μας. 
              Κάθε υπόθεση εξετάζεται συνεργατικά, διασφαλίζοντας ότι αναλύεται από πολλαπλές νομικές οπτικές γωνίες.
            </p>

            <div className="space-y-6">
              {[
                { title: "Πολυεπίπεδη Ανάλυση", desc: "Κάθε υπόθεση περνά από εξειδικευμένους συνεργάτες για βέλτιστα αποτελέσματα." },
                { title: "Προσωπική Ενασχόληση", desc: "Ο Δημήτριος Γ. Κατσούρας επιβλέπει προσωπικά κάθε στρατηγικό βήμα." },
                { title: "Σύγχρονη Προσέγγιση", desc: "Χρησιμοποιούμε τεχνολογία και σύγχρονα εργαλεία για την ταχύτερη διεκπεραίωση." }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-slate-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-100 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-slate-800 rounded-3xl overflow-hidden shadow-2xl relative border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-transparent to-transparent opacity-60 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800" 
                alt="Law Excellence" 
                className="object-cover w-full h-full grayscale"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                  <Users className="text-white w-8 h-8 mb-4 opacity-50" />
                  <p className="text-2xl font-serif italic text-white leading-relaxed">"Η εμπιστοσύνη χτίζεται πάνω στην αποτελεσματικότητα και τη συνεργασία."</p>
                  <div className="mt-6 flex items-center space-x-3">
                    <div className="h-[1px] w-8 bg-slate-500" />
                    <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">ΔΗΜΗΤΡΙΟΣ Γ. ΚΑΤΣΟΥΡΑΣ</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BusinessSupport = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[40px] p-12 lg:p-20 shadow-xl relative border border-slate-100"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-slate-900 text-white text-[10px] font-bold px-4 py-1.5 rounded-lg tracking-[0.2em] mb-8 uppercase">BUSINESS LEGAL SUPPORT</span>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                Στρατηγική Υποστήριξη <br /> Επιχειρήσεων
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Παρέχουμε ολοκληρωμένες νομικές λύσεις για την επιχείρησή σας, από τη σύσταση και τη διακυβέρνηση έως τη διαχείριση κινδύνων και τη διασφάλιση της συμμόρφωσης.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                {[
                  "Σύσταση & Μετασχηματισμοί",
                  "Εμπορικές Συμβάσεις",
                  "Κανονιστική Συμμόρφωση",
                  "Επιχειρηματικές Αντιδικίες"
                ].map(item => (
                  <div key={item} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                    <span className="font-semibold text-slate-800 text-sm italic">{item}</span>
                  </div>
                ))}
              </div>
              
              <a href="#contact" className="inline-flex items-center text-slate-900 font-bold group border-b-2 border-slate-900 pb-1 hover:text-slate-500 hover:border-slate-500 transition-all">
                Μάθετε περισσότερα για την υποστήριξη
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="hidden lg:grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-slate-50 h-56 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Corporate" />
                </div>
                <div className="bg-slate-900 h-44 rounded-3xl flex items-center justify-center p-8 text-center text-white">
                  <div>
                    <Building2 className="w-8 h-8 mb-4 mx-auto text-slate-400" />
                    <p className="text-sm font-bold tracking-widest uppercase">Expertise</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white h-44 rounded-3xl flex items-center justify-center p-8 text-center border border-slate-100 shadow-sm">
                   <p className="text-lg font-serif italic text-slate-900">"Εξατομικευμένη λύση για κάθε επιχείρηση."</p>
                </div>
                <div className="bg-slate-200 h-56 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Office Detail" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase block mb-6"
          >
            ΣΤΟΙΧΕΙΑ ΕΠΙΚΟΙΝΩΝΙΑΣ
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight"
          >
            Είμαστε εδώ για να σας ακούσουμε
          </motion.h2>
          <p className="text-slate-600 text-lg">
            Προγραμματίστε μια συνάντηση στο γραφείο μας στη Λαμία ή επικοινωνήστε τηλεφωνικά για μια πρώτη αξιολόγηση της υπόθεσής σας.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { icon: MapPin, title: "Διεύθυνση", text: "Λεωσθένους 2, 35131 Λαμία" },
            { icon: Phone, title: "Τηλέφωνα", text: "2231036519", subtext: "6974750868" },
            { icon: Clock, title: "Ώρες Λειτουργίας", text: "Δευτέρα - Παρασκευή: 09:00 - 21:00", subtext: "Σάββατο: Κατόπιν ραντεβού" }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-[32px] border border-slate-100 group hover:bg-slate-900 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white flex items-center justify-center rounded-2xl mb-6 shadow-sm group-hover:bg-slate-800 group-hover:text-white transition-all duration-500">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2 group-hover:text-white transition-colors">{item.title}</h4>
              <p className="text-slate-600 font-medium group-hover:text-slate-300 transition-colors">{item.text}</p>
              {item.subtext && <p className="text-slate-500 text-sm italic group-hover:text-slate-400 transition-colors mt-1">{item.subtext}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-xl shadow-2xl">
                <Scale className="text-slate-900 w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl tracking-tight text-white uppercase">ΚΑΤΣΟΥΡΑΣ</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">ΝΟΜΙΚΕΣ ΥΠΗΡΕΣΙΕΣ</span>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-500 font-medium">
              Δικηγόρος Παρ' Αρείω Πάγω. Ολοκληρωμένες νομικές υπηρεσίες με έδρα τη Λαμία. 
              Προσφέρουμε εξειδικευμένη εκπροσώπηση σε ένα ευρύ φάσμα δικαίου με προσήλωση στον πελάτη.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-8 uppercase text-[10px] tracking-widest text-slate-300">Πλοήγηση</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Αρχική</a></li>
              <li><a href="#office" className="hover:text-white transition-colors">Το Γραφείο μας</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Υπηρεσίες</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Επικοινωνία</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 uppercase text-[10px] tracking-widest text-slate-300">Νομικά</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Πολιτική Απορρήτου</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Όροι Χρήσης</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 space-y-6 md:space-y-0">
          <p className="text-[10px] tracking-wider uppercase font-bold text-slate-600">
            © {new Date().getFullYear()} Δικηγορικό Γραφείο Δημήτριος Γ. Κατσούρας & Συνεργάτες
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-[10px] font-bold text-slate-700 tracking-[0.4em]">LAMIA • GREECE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-slate-900 selection:text-white scroll-smooth cursor-default">
      <Navbar />
      <Hero />
      <ExpertiseSection />
      <PartnershipSection />
      <BusinessSupport />
      <ContactSection />
      <Footer />
    </div>
  );
}
