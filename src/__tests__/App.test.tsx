// test/App.spec.tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../renderer/App';

describe('Hello page UI elements', () => {
  test('renders "Button from Member A" and is clickable', async () => {
    render(<App />);
    const btnA = screen.getByRole('button', { name: /button from member a/i });
    expect(btnA).toBeInTheDocument();
    expect(btnA).toBeEnabled();

    // no onClick side-effect in code, but we can still ensure it is interactable
    await userEvent.click(btnA);
    expect(btnA).toHaveAttribute('type', 'button');
  });

  test('renders "Hello from Leader!" button inside the Sponsors link', () => {
    render(<App />);

    // the button
    const leaderBtn = screen.getByRole('button', { name: /hello from leader!/i });
    expect(leaderBtn).toBeInTheDocument();

    // the closest anchor should be the sponsors link
    const sponsorsLink = leaderBtn.closest('a');
    expect(sponsorsLink).toBeInTheDocument();
    expect(sponsorsLink).toHaveAttribute(
      'href',
      'https://github.com/sponsors/electron-react-boilerplate'
    );
    expect(sponsorsLink).toHaveAttribute('target', '_blank');
    expect(sponsorsLink).toHaveAttribute('rel', 'noreferrer');
  });

  test('renders "Hello from Member B" paragraph in blue color', () => {
    render(<App />);
    const memberB = screen.getByText(/hello from member b/i);
    expect(memberB).toBeInTheDocument();
    // inline style is used in App.tsx, assert it:
    expect(memberB).toHaveStyle({ color: 'blue' });
  });

  // (Optional) extra checks to strengthen coverage:

  test('renders "Read our docs" link-button with correct attrs', () => {
    render(<App />);
    const docsBtn = screen.getByRole('button', { name: /read our docs/i });
    expect(docsBtn).toBeInTheDocument();

    const docsLink = docsBtn.closest('a');
    expect(docsLink).toBeInTheDocument();
    expect(docsLink).toHaveAttribute(
      'href',
      'https://electron-react-boilerplate.js.org/'
    );
    expect(docsLink).toHaveAttribute('target', '_blank');
    expect(docsLink).toHaveAttribute('rel', 'noreferrer');
  });

  test('renders "Donate" link-button with correct attrs', () => {
    render(<App />);
    const donateBtn = screen.getByRole('button', { name: /donate/i });
    expect(donateBtn).toBeInTheDocument();

    const donateLink = donateBtn.closest('a');
    expect(donateLink).toBeInTheDocument();
    expect(donateLink).toHaveAttribute(
      'href',
      'https://github.com/sponsors/electron-react-boilerplate'
    );
    expect(donateLink).toHaveAttribute('target', '_blank');
    expect(donateLink).toHaveAttribute('rel', 'noreferrer');
  });

  test('renders the image logo and the meme dog image', () => {
    render(<App />);

    // project logo (has alt="icon" in your code)
    const logo = screen.getByAltText('icon');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('width', '200');

    // meme dog image (has alt="memes dog")
    const dog = screen.getByAltText(/memes dog/i);
    expect(dog).toBeInTheDocument();
    expect(dog).toHaveAttribute('width', '150');
    expect(dog).toHaveAttribute('height', '130');
  });
});
