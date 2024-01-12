import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import styled from '@emotion/styled';
import AccordionContent from './AccordionContent';
interface IContent {
  question: string;
  myAnswer: string;
  correctAnswer: string;
  questionNumber: number;
}

type Props = {
  content: IContent;
  id: string | number;
  title: string;
};

const Accrodion = ({ content, id, title }: Props) => {
  const [active, setActive] = useState<string | number>('');
  const { question, myAnswer, correctAnswer } = content;
  const toggleHandler = () => {
    setActive(id);
    if (active === id) {
      setActive('');
    }
  };
  const onToggle = useDebounce(toggleHandler, 200);

  return (
    <Container>
      <div className="accordion">
        <div className="accordionHeading">
          <div className="container">
            <span>{title}</span>
            <span id="toggle" onClick={onToggle}>
              {active === id ? '△' : '▽'}
            </span>
          </div>
        </div>
        <div className={(active === id ? 'show' : '') + ' accordionContent'}>
          <AccordionContent
            question={question}
            myAnswer={myAnswer}
            correctAnswer={correctAnswer}
          />
        </div>
      </div>
    </Container>
  );
};

export default Accrodion;

const Container = styled.div`
  width: 100%;
  margin: auto;

  & .accordion {
    margin: 0 auto;
    color: var(--primary);
    border-top: 1px solid var(--bg-accent);
    border-bottom: 1px solid var(--bg-accent);
  }

  & .accordionHeading {
    background: var(--bg);
    padding: 14px 0;
    justify-content: space-between;
    text-align: left;

    p {
      letter-spacing: 1.2px;
      display: inline;
      font-weight: bold;
      margin-left: 5px;
      font-size: 16px;
      line-height: 1.6;
    }

    #toggle {
      cursor: pointer;
      display: inline;
      float: right;
      margin-right: 5px;
    }
  }

  & .accordionContent {
    background: var(--bg);
    display: flex;
    overflow: hidden;
    overflow-y: scroll;
    transition: all 400ms ease-in-out;
    height: 0;
    opacity: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  & .accordionContent.show {
    height: 300px;
    opacity: 1;
  }
`;
