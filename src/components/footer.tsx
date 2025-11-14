import Link from "next/link";
import { Dumbbell, Facebook, Instagram, Twitter } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-white" />
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground">{siteConfig.tagline}</p>
            <div className="flex gap-4">
              <Link href={siteConfig.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" /></Link>
              <Link href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" /></Link>
              <Link href={siteConfig.socialLinks.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" /></Link>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 md:col-start-3">
             <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold">Quick Links</h3>
                  <ul className="mt-4 space-y-2">
                    {siteConfig.navLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                 <div>
                  <h3 className="font-semibold">Contact</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">{siteConfig.contact.address}</li>
                    <li className="flex items-start gap-2">{siteConfig.contact.email}</li>
                    <li className="flex items-start gap-2">{siteConfig.contact.phone}</li>
                  </ul>
                </div>
             </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
