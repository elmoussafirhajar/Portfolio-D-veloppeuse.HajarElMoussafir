// import { defineCollection, z } from 'astro:content';

// export const collections = {
// 	work: defineCollection({
// 		schema: z.object({
// 			title: z.string(),
// 			description: z.string(),
// 			publishDate: z.coerce.date(),
// 			tags: z.array(z.string()),
// 			img: z.string(),
// 			img_alt: z.string().optional(),
// 		}),
// 	}),
// };

import { defineCollection, z } from 'astro:content';

export const collections = {
    work: defineCollection({
        schema: z.object({
            title: z.string(),
            publishDate: z.coerce.date(),// You may need to adjust the data type here.
            img: z.string(),
            img_alt: z.string().optional(),
            description: z.string(),
            tags: z.array(z.string()),
        }),
    }),
};
