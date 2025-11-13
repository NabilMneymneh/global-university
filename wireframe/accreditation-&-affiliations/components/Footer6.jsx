"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer6() {
  const formState = useForm();
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className="mb-6 lg:mb-0">
            <h1 className="text-medium font-semibold">Stay connected</h1>
            <p>Subscribe to our newsletter for updates and insights</p>
          </div>
          <div className="max-w-md lg:min-w-[25rem]">
            <form
              className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4"
              onSubmit={formState.handleSubmit}
            >
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formState.email}
                onChange={formState.handleSetEmail}
              />
              <Button title="Subscribe" variant="secondary" size="sm">
                Subscribe
              </Button>
            </form>
            <p className="text-tiny">
              By subscribing, you agree to our privacy policy
            </p>
          </div>
        </div>
        <div className="py-12 md:py-18 lg:py-20">
          <div className="h-px w-full bg-scheme-border" />
        </div>
        <div className="mb-12 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-6">
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Quick links</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  About us
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Academics
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Admissions
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Research
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Student life
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Resources</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Student portal
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  E-library
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Job board
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Alumni network
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Support services
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Contact</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Campus locations
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Emergency contacts
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Media inquiries
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Careers
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Procurement
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Legal</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Privacy policy
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Terms of use
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Accessibility
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Accreditation
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Social media</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Facebook
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Twitter
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Instagram
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  LinkedIn
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Support</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Help center
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  FAQs
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Contact support
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Report an issue
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-scheme-border" />
        <div className="text-small flex flex-col items-start pt-6 pb-4 sm:flex-row sm:items-center sm:justify-between md:pt-8 md:pb-0">
          <a href="#" className="mb-6 sm:mb-0">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Logo image"
            />
          </a>
          <p className="text-small">© 2024 Relume. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
