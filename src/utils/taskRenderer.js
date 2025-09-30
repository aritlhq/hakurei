export function renderTaskToHtml(task) {
    if (typeof task === 'string') {
        return `<p>${task}</p>`;
    }

    if (typeof task === 'object' && task !== null) {
        switch (task.type) {
            case 'text':
                return `<p>${task.content}</p>`;
            case 'quote':
                return `
                    <blockquote class="p-2 my-1 italic border-s-4 bg-base-200 border-base-content/20">
                        ${task.content}
                    </blockquote>
                `;
            case 'link':
                return `
                    <p>
                        ${task.text}
                        <a href="${task.url}" target="_blank" rel="noopener noreferrer" class="link link-secondary block truncate">
                            ${task.url}
                        </a>
                    </p>
                `;
        }
    }
    return '';
}