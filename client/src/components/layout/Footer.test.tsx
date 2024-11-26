import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders footer content correctly', () => {
    render(<Footer />);
    
    // Test for accessibility
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();

    // Test for important content
    expect(screen.getByAltText('iForge Logo')).toBeInTheDocument();
    expect(screen.getByText('© 2024 iForge. All rights reserved.')).toBeInTheDocument();

    // Test for social links accessibility
    const socialLinks = screen.getAllByRole('link');
    expect(socialLinks.length).toBeGreaterThan(0);
    
    // Test for proper aria-labels on social icons
    const facebookLink = screen.getByText('Facebook', { selector: 'span' });
    expect(facebookLink).toHaveClass('sr-only');
  });
});
