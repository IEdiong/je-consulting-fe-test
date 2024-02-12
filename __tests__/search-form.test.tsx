import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SearchForm } from '@/components';

jest.useFakeTimers(); // Mock timers

describe('SearchForm component', () => {
  // 1. 2 seconds after the user types in a search query a component with a list of recent searches should be displayed

  it('Should display a list of recent searches 2 secs after typing into the input field', async () => {
    // Arrange
    render(<SearchForm />);

    // Act
    const searchInput = screen.getByRole('searchbox');
    fireEvent.input(searchInput, { target: { value: 'movie' } });

    // Advance timers
    jest.advanceTimersByTime(2000);

    // Assert
    await waitFor(() => {
      // Check that the list of recent searches is displayed
      expect(screen.getByTestId('recent-searches')).toBeInTheDocument();
    });
  });
});
