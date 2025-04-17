import { siteConfig } from "@/config/site"; 

export const metadata = {
  title: {
    default: "Events",
    template: `%s`, // Prevents appending the site name again
  },
  description: siteConfig.description,
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <div className="">
        {children}
      </div>
    </section>
  );
}
