# Vincent Mutuku - Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and deployed on Vercel.

## Features

- 🎨 Modern, clean design with dark/light mode toggle
- 📱 Fully responsive across all devices
- ⚡ Optimized for performance and SEO
- 🚀 Built with Next.js 15 and Tailwind CSS
- 🎯 Sections: Hero, About, Projects, Skills, Contact
- 📧 Contact form with validation
- 🔗 Social media integration

## Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Fonts:** Geist Sans & Geist Mono
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/vincentmutuku/portfolio.git
   cd portfolio
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install

# or

yarn install
\`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev

# or

yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your information:

- `components/hero-section.tsx` - Name, profession, bio
- `components/about-section.tsx` - About me content and profile image
- `components/projects-section.tsx` - Your projects
- `components/skills-section.tsx` - Your technical skills
- `components/contact-section.tsx` - Contact information
- `app/layout.tsx` - SEO metadata

### Styling

- Colors: Modify `app/globals.css` color variables
- Components: Update individual component files
- Layout: Adjust responsive breakpoints in Tailwind classes

### Adding Projects

Edit `components/projects-section.tsx` and add your projects to the `projects` array:

\`\`\`tsx
{
title: "Your Project Name",
description: "Project description...",
image: "/placeholder.svg?height=300&width=400",
tech: ["React", "Next.js", "Tailwind"],
github: "https://github.com/yourusername/project",
demo: "https://your-project-demo.com"
}
\`\`\`

## Performance Optimizations

- ✅ Image optimization with Next.js Image component
- ✅ Font optimization with next/font
- ✅ Code splitting and lazy loading
- ✅ SEO optimization with metadata
- ✅ Analytics integration
- ✅ Responsive design

## SEO Features

- Meta tags for social sharing
- Structured data
- Sitemap generation
- Robots.txt
- Open Graph and Twitter Card support

## License

MIT License - feel free to use this template for your own portfolio!

## Support

If you have any questions or need help with deployment, feel free to reach out!
# my-portfolio
