import { screen } from "@testing-library/react";
import React from "react";
import QuizSelectField from "../QuizSelectField";
import render from "../../utils/test/render";

describe("QuizSelectField 컴포넌트", () => {
  it("label prop으로 설정한 라벨 제목이 보여야 한다.", async () => {
    await render(<QuizSelectField label="test" type="category" id="test" />);
    const label = screen.getByText("test");
    expect(label).toBeInTheDocument();
  });

  it("className prop으로 설정한 css class가 존재해야 한다.", async () => {
    await render(<QuizSelectField label="test" type="category" id="test" className="my-class" />);
    const label = screen.getByTestId("test-input");
    expect(label).toHaveClass("my-class");
  });

  describe("option item", () => {
    it("type 값이 category라면 카테고리에 대한 option이 출력되어야 한다.", async () => {
      await render(<QuizSelectField label="test" value="any" type="category" id="test" className="my-class" />);
      const value = screen.getByText("Any Category");
      expect(value).toBeInTheDocument();
    });

    it("type 값이 difficulty라면 난이도에 대한 option이 출력되어야 한다.", async () => {
      await render(<QuizSelectField label="test" value="any" type="difficulty" id="test" className="my-class" />);
      const value = screen.getByText("Any Difficulty");
      expect(value).toBeInTheDocument();
    });

    it("type 값이 quizType이라면 문제 유형에 대한 option이 출력되어야 한다.", async () => {
      await render(<QuizSelectField label="test" value="any" type="type" id="test" className="my-class" />);
      const value = screen.getByText("Any Type");
      expect(value).toBeInTheDocument();
    });
  });
});
