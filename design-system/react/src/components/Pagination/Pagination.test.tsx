import { render, act } from '@fuel-ui/test-utils';

import { Pagination } from '.';

describe('Pagination', () => {
  it('should trigger onPageChange in every case', async () => {
    const onPageChange = jest.fn();

    const { getByLabelText } = render(
      <Pagination.Container
        onPageChange={onPageChange}
        totalPagesNumber={10}
        totalResults={0}
      >
        <Pagination.Footer />
      </Pagination.Container>
    );

    act(() => {
      getByLabelText('fuel-pagination-next-page').click();
    });

    expect(onPageChange).toBeCalledWith(2);

    act(() => {
      getByLabelText('fuel-pagination-previous-page').click();
    });

    expect(onPageChange).toBeCalledWith(1);

    act(() => {
      getByLabelText(`fuel-pagination-page-${10}`).click();
    });

    expect(onPageChange).toBeCalledWith(10);
    expect(onPageChange).toBeCalledTimes(3);
  });
});
