import { renderHook, waitFor } from '@testing-library/react';
import useGetQuiz from '../../../hooks/useGetQuiz';

const getQuizFn = vi.fn(() => Promise.resolve());
vi.mock('../../../api/quiz', async () => {
  const original = await vi.importActual('../../../api/quiz');
  return { ...original, getQuiz: () => getQuizFn };
});

describe('useGetQuiz Hook', () => {
  it('isLoading 상태 초기는 true 였다가 데이터를 가져오면 isLodaing 상태가 false여야 한다', async () => {
    const { result } = renderHook(() =>
      useGetQuiz({
        amount: 10,
        category: 'any',
        difficulty: 'any',
        type: 'any'
      })
    );

    expect(result.current?.data).toEqual(null);
    expect(result.current?.isLoading).toBe(true);
    await waitFor(() => expect(result.current?.isLoading).toEqual(false));
  });

  it('데이터에서 에러가 나왔을 시에는 데이터 값이 null이어야한다.', async () => {
    const { result } = renderHook(() =>
      useGetQuiz({
        amount: 10,
        category: 'error',
        difficulty: 'any',
        type: 'any'
      })
    );

    expect(result.current?.data).toEqual(null);
    expect(result.current?.isLoading).toBe(true);
    await waitFor(() => expect(result.current?.data).toEqual(null));
  });
  it('데이터를 정상적으로 호출해야 한다.', async () => {
    const { result } = renderHook(() =>
      useGetQuiz({
        amount: 10,
        category: 'any',
        difficulty: 'any',
        type: 'any'
      })
    );

    expect(result.current?.data).toEqual(null);
    expect(result.current?.isLoading).toBe(true);
    await waitFor(() => {
      return expect(getQuizFn).toHaveBeenCalledTimes(1);
    });
  });
  it('데이터를 정상적으로 받아와야 한다.', async () => {
    const { result } = renderHook(() =>
      useGetQuiz({
        amount: 10,
        category: 'any',
        difficulty: 'any',
        type: 'any'
      })
    );

    expect(result.current?.data).toEqual(null);
    expect(result.current?.isLoading).toBe(true);
    await waitFor(() => {
      return expect(getQuizFn).toHaveBeenCalledTimes(1);
    });
    expect(result.current?.isLoading).toBe(false);
    expect(result.current.data).toEqual(new Promise(() => {}));
  });
});
