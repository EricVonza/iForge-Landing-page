// Shared styles configuration
export const sectionClasses = {
  default: "relative py-12 sm:py-16 lg:py-20 bg-background",
  muted: "relative py-12 sm:py-16 lg:py-20 bg-muted/50",
  hero: "relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24",
  container: "container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl",
  footer: "relative py-12 sm:py-16 bg-muted/50"
};

export const gridClasses = {
  features: "grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3",
  cards: "grid gap-6 sm:gap-8 lg:grid-cols-4",
  twoColumns: "grid gap-8 md:grid-cols-2",
  autoFit: "grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]"
};

export const spacingClasses = {
  sectionGap: "space-y-12 sm:space-y-16",
  contentGap: "space-y-8 sm:space-y-10",
  elementGap: "space-y-4 sm:space-y-6",
  footerGap: "space-y-10"
};

export const gradientClasses = {
  radial: "bg-gradient-radial from-primary/10 via-primary/5 to-transparent",
  grid: "absolute inset-0 bg-grid-pattern bg-[size:2rem_2rem] opacity-30",
  text: "bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80",
  button: "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300",
  overlay: "absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background/90"
};

export const buttonClasses = {
  primary: "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300",
  gradient: "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300",
  hover: "hover:shadow-lg hover:-translate-y-0.5"
};

export const layoutClasses = {
  section: "flex flex-col w-full",
  card: "flex flex-col h-full rounded-lg border border-border/50 bg-card p-6 transition-all duration-300",
  content: "flex flex-col gap-6"
};

export const textClasses = {
  title: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight",
  subtitle: "text-xl sm:text-2xl font-semibold",
  description: "text-base sm:text-lg text-muted-foreground",
  small: "text-sm text-muted-foreground",
  footer: "text-sm text-muted-foreground"
};

export const animationClasses = {
  hover: "transition-all duration-300 ease-in-out",
  fadeIn: "animate-in fade-in duration-500",
  slideUp: "animate-in slide-in-from-bottom duration-500",
  pulse: "animate-pulse"
};

export const imageClasses = {
  responsive: "w-full h-auto object-cover",
  avatar: "rounded-full object-cover",
  icon: "w-6 h-6",
  logo: "h-8 w-auto"
};
