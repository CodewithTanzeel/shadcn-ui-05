"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


const frameworks = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        link: "https://www.example.com/to-kill-a-mockingbird"
    },
    {
        title: "1984",
        author: "George Orwell",
        link: "https://www.example.com/1984"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        link: "https://www.example.com/the-great-gatsby"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        link: "https://www.example.com/pride-and-prejudice"
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        link: "https://www.example.com/the-catcher-in-the-rye"
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        link: "https://www.example.com/the-lord-of-the-rings"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        link: "https://www.example.com/the-hobbit"
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        link: "https://www.example.com/moby-dick"
    },
    {
        title: "War and Peace",
        author: "Leo Tolstoy",
        link: "https://www.example.com/war-and-peace"
    },
    {
        title: "Ulysses",
        author: "James Joyce",
        link: "https://www.example.com/ulysses"
    },
    {
        title: "The Divine Comedy",
        author: "Dante Alighieri",
        link: "https://www.example.com/the-divine-comedy"
    },
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        link: "https://www.example.com/crime-and-punishment"
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        link: "https://www.example.com/brave-new-world"
    },
    {
        title: "The Odyssey",
        author: "Homer",
        link: "https://www.example.com/the-odyssey"
    },
    {
        title: "The Iliad",
        author: "Homer",
        link: "https://www.example.com/the-iliad"
    },
    {
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        link: "https://www.example.com/don-quixote"
    },
    {
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        link: "https://www.example.com/anna-karenina"
    },
    {
        title: "Madame Bovary",
        author: "Gustave Flaubert",
        link: "https://www.example.com/madame-bovary"
    },
    {
        title: "One Hundred Years of Solitude",
        author: "Gabriel Garcia Marquez",
        link: "https://www.example.com/one-hundred-years-of-solitude"
    },
    {
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        link: "https://www.example.com/the-brothers-karamazov"
    },
    {
        title: "Wuthering Heights",
        author: "Emily Brontë",
        link: "https://www.example.com/wuthering-heights"
    },
    {
        title: "Great Expectations",
        author: "Charles Dickens",
        link: "https://www.example.com/great-expectations"
    },
    {
        title: "The Scarlet Letter",
        author: "Nathaniel Hawthorne",
        link: "https://www.example.com/the-scarlet-letter"
    },
    {
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        link: "https://www.example.com/jane-eyre"
    },
    {
        title: "The Count of Monte Cristo",
        author: "Alexandre Dumas",
        link: "https://www.example.com/the-count-of-monte-cristo"
    },
    {
        title: "Les Misérables",
        author: "Victor Hugo",
        link: "https://www.example.com/les-miserables"
    },
    {
        title: "Dracula",
        author: "Bram Stoker",
        link: "https://www.example.com/dracula"
    },
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        link: "https://www.example.com/frankenstein"
    },
    {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        link: "https://www.example.com/the-picture-of-dorian-gray"
    },
    {
        title: "The Stranger",
        author: "Albert Camus",
        link: "https://www.example.com/the-stranger"
    },
    {
        title: "The Sun Also Rises",
        author: "Ernest Hemingway",
        link: "https://www.example.com/the-sun-also-rises"
    },
    {
        title: "The Grapes of Wrath",
        author: "John Steinbeck",
        link: "https://www.example.com/the-grapes-of-wrath"
    },
    {
        title: "The Old Man and the Sea",
        author: "Ernest Hemingway",
        link: "https://www.example.com/the-old-man-and-the-sea"
    },
    {
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        link: "https://www.example.com/fahrenheit-451"
    },
    {
        title: "Slaughterhouse-Five",
        author: "Kurt Vonnegut",
        link: "https://www.example.com/slaughterhouse-five"
    },
    {
        title: "The Catch-22",
        author: "Joseph Heller",
        link: "https://www.example.com/the-catch-22"
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        link: "https://www.example.com/the-alchemist"
    },
    {
        title: "The Road",
        author: "Cormac McCarthy",
        link: "https://www.example.com/the-road"
    },
    {
        title: "Life of Pi",
        author: "Yann Martel",
        link: "https://www.example.com/life-of-pi"
    },
    {
        title: "Beloved",
        author: "Toni Morrison",
        link: "https://www.example.com/beloved"
    },
    {
        title: "The Book Thief",
        author: "Markus Zusak",
        link: "https://www.example.com/the-book-thief"
    },
    {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        link: "https://www.example.com/the-kite-runner"
    },
    {
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        link: "https://www.example.com/a-tale-of-two-cities"
    },
    {
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        link: "https://www.example.com/the-secret-garden"
    },
    {
        title: "Gone with the Wind",
        author: "Margaret Mitchell",
        link: "https://www.example.com/gone-with-the-wind"
    },
    {
        title: "The Chronicles of Narnia",
        author: "C.S. Lewis",
        link: "https://www.example.com/the-chronicles-of-narnia"
    },
    {
        title: "Lolita",
        author: "Vladimir Nabokov",
        link: "https://www.example.com/lolita"
    },
    {
        title: "Memoirs of a Geisha",
        author: "Arthur Golden",
        link: "https://www.example.com/memoirs-of-a-geisha"
    },
    {
        title: "The Handmaid's Tale",
        author: "Margaret Atwood",
        link: "https://www.example.com/the-handmaids-tale"
    },
    {
        title: "The Wind-Up Bird Chronicle",
        author: "Haruki Murakami",
        link: "https://www.example.com/the-wind-up-bird-chronicle"
    }
];



export function ComboboxDemo() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[600px] justify-between mt-5"
                >
                    {value
                        ? frameworks.find((framework) => framework.title === value)?.author
                        : "Select Books..."}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[600px] p-0">
                <Command>
                    <CommandInput placeholder="Search Books..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No Books found.</CommandEmpty>
                        <CommandGroup>
                            {frameworks.map((framework) => (
                                <CommandItem
                                    key={framework.title}
                                    value={framework.title}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {framework.author}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            value === framework.title ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

