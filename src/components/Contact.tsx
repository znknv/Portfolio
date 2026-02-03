import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Message envoyé avec succès !");
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-1/3 bg-primary p-12 text-primary-foreground">
            <h2 className="text-2xl font-serif font-bold mb-4">Zargan BAKANOVA</h2>
            <p className="text-primary-foreground/70 mb-8">
              Étudiante en 2ème année de BTS Services Informatiques aux Organisations — ESUPEC Cholet
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/50 uppercase font-bold tracking-widest">Email</p>
                  <p className="font-medium">Bakanova.zargan2@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/50 uppercase font-bold tracking-widest">Téléphone</p>
                  <p className="font-medium">+33 6 20 66 73 11</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/50 uppercase font-bold tracking-widest">Localisation</p>
                  <p className="font-medium">Cholet, France</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Nom Complet</label>
                  <input 
                    {...register("name", { required: true })}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all ${errors.name ? 'border-destructive' : 'border-border'}`}
                    placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input 
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all ${errors.email ? 'border-destructive' : 'border-border'}`}
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Sujet</label>
                <input 
                  {...register("subject")}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary outline-none"
                  placeholder="Objet du message"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea 
                  {...register("message", { required: true })}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all ${errors.message ? 'border-destructive' : 'border-border'}`}
                  placeholder="Comment puis-je vous aider ?"
                />
              </div>
              <button 
                type="submit" 
                className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Envoyer le message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;