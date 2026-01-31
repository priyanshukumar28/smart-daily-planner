
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  test('renders the main components', () => {
    render(<Dashboard />);

    expect(screen.getByText("Daily Planner")).toBeInTheDocument();
    expect(screen.getByText("Add a New Task")).toBeInTheDocument();
    expect(screen.getByText("All Tasks")).toBeInTheDocument();
    expect(screen.getByText("Today's Focus")).toBeInTheDocument();
  });
});
