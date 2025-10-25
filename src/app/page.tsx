"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import { BarChart3, Building, Calendar, DollarSign, Globe, HelpCircle, MessageSquare, Settings, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Benefits", id: "benefits" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="AP Wireless"
          button={{
            text: "Get Quote",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero" className="bg-gradient-to-b from-background to-card">
        <HeroBillboard
          title="Strategic Cell Site Lease Investment"
          description="Maximize your property's potential with AP Wireless. We provide upfront lump-sum payments for cell tower lease rights across 23 countries worldwide."
          tag="Industry Leader"
          tagIcon={Building}
          buttons={[
            {
              text: "Get Your Quote",
              href: "contact"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/17324301/pexels-photo-17324301.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Cell phone tower communication infrastructure"
        />
      </div>

      <div id="about" data-section="about" className="bg-card">
        <TextSplitAbout
          title="25+ Years Experience"
          description={[
            "APWireless is one of the leading cell tower lease investment firms in the world. We are focused on the strategic acquisition and management of ground, tower, rooftop and in-building cell site leases.",
            "Our business develops partnerships with existing cell tower landlords, providing them with a lump-sum payment in exchange for the right to receive future rents associated with cell sites on their property."
          ]}
          buttons={[
            {
              text: "Our Services",
              href: "services"
            }
          ]}
        />
      </div>

      <div id="services" data-section="services" className="bg-background">
        <FeatureCardTwo
          title="What We Do"
          description="Comprehensive cell site lease solutions across multiple property types and markets worldwide"
          tag="Services"
          tagIcon={Settings}
          features={[
            {
              title: "Lease Buyouts",
              description: "We make large, up-front lump-sum payments to property owners in exchange for the right to receive cell tower rents for a fixed period of time.",
              icon: DollarSign
            },
            {
              title: "Property Management",
              description: "Strategic acquisition and management of ground, tower, rooftop and in-building cell site leases across 23 countries.",
              icon: Building
            },
            {
              title: "Portfolio Optimization",
              description: "We seek to add as many wireless carriers to each cell tower location as possible, ensuring maximum potential for every site.",
              icon: TrendingUp
            }
          ]}
        />
      </div>

      <div id="benefits" data-section="benefits">
        <MetricCardThree
          title="Global Presence"
          description="Our investment portfolio spans multiple continents with thousands of active leases"
          tag="Performance"
          tagIcon={BarChart3}
          metrics={[
            {
              id: "1",
              icon: Globe,
              title: "Countries",
              value: "23+"
            },
            {
              id: "2",
              icon: Building,
              title: "Active Leases",
              value: "5,000+"
            },
            {
              id: "3",
              icon: Calendar,
              title: "Years Experience",
              value: "25+"
            },
            {
              id: "4",
              icon: Users,
              title: "Property Owners",
              value: "3,500+"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials" className="bg-card">
        <TestimonialCardTwo
          title="What Property Owners Say"
          description="Real experiences from landlords who chose AP Wireless for their cell site investments"
          tag="Success Stories"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Commercial Property Owner",
              testimonial: "AP Wireless provided exactly what they promised - a substantial upfront payment that allowed me to reinvest in other properties. The process was transparent and professional throughout.",
              imageSrc: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Robert Chen",
              role: "Real Estate Investor",
              testimonial: "Working with AP Wireless was the best decision for my portfolio. They handled all the complexities while I received immediate capital to expand my investments.",
              imageSrc: "https://images.pexels.com/photos/7578876/pexels-photo-7578876.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Maria Rodriguez",
              role: "Property Developer",
              testimonial: "The team at AP Wireless understood our needs perfectly. The lump-sum payment helped fund our next development project ahead of schedule.",
              imageSrc: "https://images.pexels.com/photos/30324868/pexels-photo-30324868.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Landowner",
              testimonial: "Twenty-five years of experience really shows. AP Wireless made the entire lease buyout process seamless and delivered exceptional value for our property.",
              imageSrc: "https://images.pexels.com/photos/3760525/pexels-photo-3760525.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="partners" data-section="partners">
        <SocialProofOne
          title="Trusted by Major Carriers"
          description="Leading telecommunications companies worldwide choose our infrastructure solutions"
          logos={[
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4267473/pexels-photo-4267473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/17887854/pexels-photo-17887854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/33714867/pexels-photo-33714867.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Common questions about cell site lease buyouts and our investment process"
          tag="Help Center"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What is a cell tower lease buyout?",
              content: "A cell tower lease buyout is an alternative to receiving monthly rent from your tower company or wireless carrier. We make a large, up-front lump-sum payment to you and in return you grant us the right to receive cell tower rents for a fixed period of time."
            },
            {
              id: "2",
              title: "Why would I want to sell my cell tower lease?",
              content: "As a cell site landlord, you may want immediate capital for investments, debt reduction, or other financial goals. A lump-sum payment provides immediate liquidity instead of waiting years for monthly payments."
            },
            {
              id: "3",
              title: "How do you determine the buyout amount?",
              content: "Our valuation considers multiple factors including current lease terms, carrier reliability, location desirability, remaining lease duration, and potential for additional carriers at the site."
            },
            {
              id: "4",
              title: "What types of properties do you work with?",
              content: "We work with ground leases, tower sites, rooftop installations, and in-building cell sites across residential, commercial, and industrial properties in 23 countries."
            },
            {
              id: "5",
              title: "How long does the process take?",
              content: "Typically 30-60 days from initial evaluation to closing, depending on lease complexity and due diligence requirements. We strive to make the process as efficient as possible."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get Your Property Evaluation"
          description="Contact our experts today for a comprehensive assessment of your cell site lease value and potential buyout options."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "property",
              type: "text",
              placeholder: "Property Address",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your cell site lease (carrier, lease terms, etc.)",
            rows: 5,
            required: true
          }}
          buttonText="Request Evaluation"
          imageSrc="https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Business consultation meeting"
        />
      </div>
    </ThemeProvider>
  );
}