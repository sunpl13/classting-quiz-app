import styled from '@emotion/styled';
import Skeleton from './Skeleton';

const LoadingSkeleton = () => {
  return (
    <Wrapper data-testid="loading">
      <Skeleton width={40} height={30} $mb={10} />
      <Skeleton width={380} height={45} $mb={20} />

      {Array.from({ length: 4 }).map((_, idx) => {
        return (
          <Skeleton
            key={idx}
            width={100}
            height={48}
            $wUnit={'%'}
            $rounded={true}
            $mb={10}
          />
        );
      })}
      <div className="flx-end">
        <Skeleton width={120} height={53} />
      </div>
    </Wrapper>
  );
};

export default LoadingSkeleton;

const Wrapper = styled.div`
  width: 500px;
  background: var(--bg);
  border-radius: 4px;
  margin-top: 100px;
  padding: 30px 60px;

  & .flx-end {
    display: flex;
    justify-content: flex-end;
  }
`;
