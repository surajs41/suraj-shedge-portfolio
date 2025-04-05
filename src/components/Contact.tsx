
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Step 1: Send notification email to the portfolio owner
      const ownerNotificationResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": import.meta.env.VITE_BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: {
            name: "Portfolio Contact Form",
            email: "noreply@portfoliocontact.com", // This is just a placeholder, Brevo will use the verified sender
          },
          to: [
            {
              email: "surajshedage3315@gmail.com", // Updated email address
              name: "Suraj Shedge",
            },
          ],
          subject: `New Contact Form Message: ${formData.subject || "No Subject"}`,
          htmlContent: `
            <h2>New contact form submission from your portfolio</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject || "No Subject"}</p>
            <p><strong>Message:</strong></p>
            <div style="padding: 15px; border-left: 4px solid #ccc; margin: 10px 0;">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
          `,
        }),
      });

      if (!ownerNotificationResponse.ok) {
        throw new Error('Failed to send notification email to owner');
      }

      // Step 2: Send thank you email to the user
      const userThankYouResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": import.meta.env.VITE_BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: {
            name: "Suraj Shedge",
            email: "surajshedage3315@gmail.com", // Updated sender email
          },
          to: [
            {
              email: formData.email,
              name: formData.name,
            },
          ],
          subject: "Thank you for contacting me",
          htmlContent: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2>Thank you for reaching out!</h2>
              <p>Hello ${formData.name},</p>
              <p>I appreciate you taking the time to contact me. I've received your message and will get back to you as soon as possible.</p>
              <p>For your reference, here's a copy of your message:</p>
              <div style="padding: 15px; border-left: 4px solid #ccc; background-color: #f9f9f9; margin: 15px 0;">
                <p><strong>Subject:</strong> ${formData.subject || "No Subject"}</p>
                <p><strong>Message:</strong></p>
                <p>${formData.message.replace(/\n/g, '<br>')}</p>
              </div>
              <p>Best regards,</p>
              <p><strong>Suraj Shedge</strong></p>
            </div>
          `,
        }),
      });

      if (!userThankYouResponse.ok) {
        throw new Error('Failed to send thank you email to user');
      }

      setFormSuccess(true);
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending emails:", error);
      toast({
        title: "Something went wrong",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "surajshedage3315@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "+91-9356681781",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      value: "Pune, Maharashtra, India",
    },
  ];

  return (
    <section id="contact" className="bg-background py-10 md:py-16 relative">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto">Get In Touch</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10">
          Have a question or want to work together? Fill out the form below or
          reach out directly through my contact information.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            {formSuccess ? (
              <Alert className="bg-primary/10 border-primary mb-6">
                <AlertDescription className="text-center py-8">
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p className="mb-4">Your message has been sent successfully.</p>
                  <p>I'll get back to you as soon as possible.</p>
                  <Button 
                    className="mt-4"
                    variant="outline"
                    onClick={() => setFormSuccess(false)}
                  >
                    Send Another Message
                  </Button>
                </AlertDescription>
              </Alert>
            ) : (
              <Card className="border shadow-sm">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="contact-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Your Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="johndoe@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="contact-input"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can I help you?"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="contact-input"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Write your message here..."
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="contact-input resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
            <Card className="border shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 font-montserrat">Contact Information</h3>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-muted p-3 rounded-full mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.title}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-muted p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-muted p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="mailto:surajshedage3315@gmail.com"
                      className="bg-muted p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
