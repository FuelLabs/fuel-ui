import { click, press, render, screen, testA11y, waitFor } from '@fuels/jest';

import type { PaginationBaseProps } from './Pagination';
import { Pagination } from './Pagination';

function Content(props: PaginationBaseProps) {
  return (
    <Pagination {...props}>
      <Pagination.Prev />
      <Pagination.Items />
      <Pagination.Next />
    </Pagination>
  );
}

describe('Pagination', () => {
  it('a11y', async () => {
    await testA11y(<Content pagesCount={10} />);
  });

  it('should render paginations according to default pagesDisplay', async () => {
    render(<Content pagesCount={10} />);
    expect(screen.getByLabelText('Page 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Page 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Page 3')).toBeInTheDocument();
    expect(screen.getByLabelText('Page 4')).toBeInTheDocument();
    expect(() => screen.getByLabelText('Page 5')).toThrow();
    expect(screen.getByLabelText('Page 10')).toBeInTheDocument();
  });

  it('should navigate to next page', async () => {
    render(<Content pagesCount={10} />);
    let selected = screen.getByLabelText('Page 1');
    expect(selected.getAttribute('data-selected')).toEqual('true');

    const btn = screen.getByLabelText('Next page');
    await click(btn);

    await waitFor(async () => {
      selected = await screen.findByLabelText('Page 2');
      expect(selected.getAttribute('data-selected')).toEqual('true');
    });
  });

  it('should navigate to prev page', async () => {
    render(<Content pagesCount={10} />);
    const nextBtn = screen.getByLabelText('Next page');
    const prevBtn = screen.getByLabelText('Previous page');
    await click(nextBtn);
    await click(nextBtn);
    await click(prevBtn);

    const selected = screen.getByLabelText('Page 2');
    expect(selected.getAttribute('data-selected')).toEqual('true');
  });

  it('should navigate by clicking on page', async () => {
    render(<Content pagesCount={10} />);
    const page10 = screen.getByLabelText('Page 10');
    await click(page10);
    expect(page10.getAttribute('data-selected')).toEqual('true');
  });

  it('should have tabbing navigation correctly', async () => {
    render(<Content pagesCount={10} autoFocus />);
    const page1 = await screen.findByLabelText('Page 1');
    expect(page1).toHaveFocus();

    await press('ArrowRight');
    await press('ArrowRight');
    await press('ArrowRight');
    const page4 = await screen.findByLabelText('Page 4');
    expect(page4).toHaveFocus();

    await press('ArrowLeft');
    await press('ArrowLeft');
    const page2 = await screen.findByLabelText('Page 2');
    expect(page2).toHaveFocus();
  });
});
