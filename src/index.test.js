import { reverseStr } from './index.js'

    describe('suite 1', () => {
        it('simple string with 1 word', () => {
            expect(reverseStr('Hello')).toBe('olleH');
            }
        ),

        it('difficult string', () => {
            expect(reverseStr('Hello, World!')).toBe('!dlroW ,olleH');
            }
        ), 

        it('reverse to normal string', () => {
            expect(reverseStr('!dlroW ,olleH')).toBe('Hello, World!');
            }
        ),

        it('string with numbers', () => {
            expect(reverseStr('Hello, World!1234')).toBe('4321!dlroW ,olleH');
            }
        ),

        it('invalid data', () => {
            expect(reverseStr(5)).toBe('Введены некорректные данные');
            }
        )

});