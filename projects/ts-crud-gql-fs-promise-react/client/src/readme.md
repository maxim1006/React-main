Сперва все берется из кеша, при создании, удалении, добавлении айтема надо апдейтить кеш

Только при апдейте сингл айтема вью проапдейтиться само

если из cache update вернуть undefined то тоже проапдейтится но будет доп гет запрос

также можно сделать refetch чтобы обновить данные, но опять же с доп запросом