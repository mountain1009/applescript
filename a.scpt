tell application "System Events"
    keystroke "c" using {command down} -- 現在の選択をコピー
end tell

delay 0.1 -- コピーが完了するまで待機

try
    set clipboardContents to (the clipboard as text) -- クリップボードの内容を取得
    if clipboardContents is equal to "" then
        return ""
    else
        return clipboardContents
    end if
on error
    return ""
end try
