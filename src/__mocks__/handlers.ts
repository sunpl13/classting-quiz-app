import { http, HttpResponse, delay } from 'msw';

export const handlers = [
  http.get('https://opentdb.com/api.php', async () => {
    await delay(50);
    return HttpResponse.json({
      response_code: 0,
      results: [
        {
          type: 'multiple',
          difficulty: 'medium',
          category: 'Entertainment: Video Games',
          question: 'Who composed the soundtrack for the game VVVVVV?',
          correct_answer: 'Magnus P&aring;lsson',
          incorrect_answers: [
            'Terry Cavanagh',
            'Danny Baranowsky',
            'Joel Zimmerman'
          ]
        },
        {
          type: 'multiple',
          difficulty: 'easy',
          category: 'Entertainment: Film',
          question:
            'When does &quot;Rogue One: A Star Wars Story&quot; take place chronologically in the series?',
          correct_answer: 'Between Episode 3 and 4',
          incorrect_answers: [
            'After Episode 6',
            'Before Episode 1',
            'Between Episode 4 and 5'
          ]
        }
      ]
    });
  })
];
