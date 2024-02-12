import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home page', () => {
  // 1. Should render a search form with a search input field
  // 2. Search input should take focus on page load
  // 3. 2 seconds after the user types in a search query a component with a list of recent searches should be displayed

  it('Should render a search form with a nested search input field', () => {
    // Arrange
    render(<Home />);

    // Act
    const searchInput = screen.getByRole('searchbox');
    const searchForm = screen.getByRole('search');

    // Assert
    expect(searchInput).toBeInTheDocument();
    expect(searchForm.contains(searchInput)).toBe(true);
  });

  it('Search input should take focus on page load', () => {
    // Arrange
    render(<Home />);

    // Act
    const searchInput = screen.getByRole('searchbox');

    // Assert
    expect(searchInput).toBeInTheDocument();
    expect(document.activeElement).toBe(searchInput);
  });
});
