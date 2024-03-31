### Hexlet tests and linter status:
[![Actions Status](https://github.com/lanatsoi/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/lanatsoi/frontend-project-44/actions)

<a href="https://codeclimate.com/github/lanatsoi/frontend-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/5522f0a043d49b39a08b/maintainability" /></a>

# **Игры Разума**

«Игры разума» — это набор из пяти консольных игр. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.

## Системные требования:

- ОС - *nix подобные системы
- Windows

## Инструкции по установке

- Установите Node.js последней версии
- Склонируйте созданный репозиторий на свой компьютер командой git clone
- Установите зависимости проекта командой make install
- Установите пакет с играми командой npm link

## **Игра: "Проверка на четность"**

Описание игры: Пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное. Запуск игры: node bin/brain-even.js

[![asciicast](https://asciinema.org/a/ShiOjFQXrHm7oWJSHQAvxdU0u.svg)](https://asciinema.org/a/ShiOjFQXrHm7oWJSHQAvxdU0u)

## **Игра: "Калькулятор"**

Описание игры: Пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.
Запуск: node bin/brain-calc.js

[![asciicast](https://asciinema.org/a/UyyK2rBWqSHtFRbz4Haj1Lmdn.svg)](https://asciinema.org/a/UyyK2rBWqSHtFRbz4Haj1Lmdn)

## **Игра: "НОД"**

Описание игры: Пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.
Запуск: node bin/brain-gcd.js

[![asciicast](https://asciinema.org/a/EfkYqDxdlOthRN6qlwVxn2yLK.svg)](https://asciinema.org/a/EfkYqDxdlOthRN6qlwVxn2yLK)

## **Игра: "Арифметическая прогрессия"**

Описание игры: Пользователю показывается ряд чисел, образующий арифметическую прогрессию, случайное число из этого ряда заменятся двумя точками. Игрок должен определить это число.
Запуск: node bin/brain-progression.js

[![asciicast](https://asciinema.org/a/WqM8K0l8yg0B44O0cdztQUaDb.svg)](https://asciinema.org/a/WqM8K0l8yg0B44O0cdztQUaDb)

## **Игра: "Простое ли число?"**

Описание игры: Пользователю показывается случайное число. И ему нужно ответить yes, если число является простым, или no — если число не является простым. Простое число — целое положительное число, имеющее ровно два различных натуральных делителя — единицу и самого себя. Например, 7 — простое число, потому что делится без остатка только на 1 и на себя.
Запуск: node bin/brain-prime.js

[![asciicast](https://asciinema.org/a/NkJ4WsdnfXzQvThXmBR4NGuNi.svg)](https://asciinema.org/a/NkJ4WsdnfXzQvThXmBR4NGuNi)
